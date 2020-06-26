import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RoleRepository } from '../role/role.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository, RoleRepository]),
        AuthModule,
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule { }
