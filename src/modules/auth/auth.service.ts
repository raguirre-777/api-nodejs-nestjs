import {
    Injectable,
    ConflictException,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { SignupDto, SigninDto } from './dto';
import { User } from '../user/user.entity';
import { compare } from 'bcryptjs';
import { IJwtPayload } from './jwt-payload.interface';
import { RoleType } from '../role/roletype.enum';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthRepository)
        private readonly _authRepository: AuthRepository,
        private readonly _jwtService: JwtService,
    ) { }

    async signup(signupDto: SignupDto): Promise<void> { //registrar
        const { username, email } = signupDto;
        const userExists = await this._authRepository.findOne({
            where: [{ username }, { email }],
        });

        if (userExists) {
            throw new ConflictException('username o email existe');
        }

        return this._authRepository.signup(signupDto);
    }

    async signin(signinDto: SigninDto): Promise<{ token: string }> {
        const { username, password } = signinDto;

        const user: User = await this._authRepository.findOne({
            where: { username },
        });

        if (!user) {
            throw new NotFoundException('usuario no existe');
        }

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
            throw new UnauthorizedException('credentiales invalidas');
        }

        const payload: IJwtPayload = {
            id: user.id,
            email: user.email,
            username: user.username,
            roles: user.roles.map(r => r.name as RoleType),
        };

        const token = await this._jwtService.sign(payload);



        console.log(token);

        if (!token) {
            throw new UnauthorizedException('no se logra generar token');
        }

        return { token };
    }
}
