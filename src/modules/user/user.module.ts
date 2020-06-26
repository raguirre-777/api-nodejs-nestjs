import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RoleRepository } from '../role/role.repository';
import { SharedModule } from '../../shared/shared.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([UserRepository, RoleRepository]),
        SharedModule,
    ],
    providers: [UserService],
    controllers: [UserController],
})
export class UserModule { }
