import { Controller, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { SignupDto, SigninDto } from './dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('Autentificación')
@Controller('auth')
export class AuthController {
    constructor(private readonly _authService: AuthService) { }

    @Post('/signup')// crear
    @UsePipes(ValidationPipe)
    async signup(@Body() signupDto: SignupDto): Promise<void> {
        return this._authService.signup(signupDto);
    }

    @Post('/signin') // login
    @UsePipes(ValidationPipe)
    async signin(@Body() signinDto: SigninDto) {
        return this._authService.signin(signinDto);
    }
}
