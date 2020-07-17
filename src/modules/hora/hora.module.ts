import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoraRepository } from './hora.repository';
import { HoraService } from './hora.service';
import { HoraController } from './hora.controller';
import { AuthModule } from '../auth/auth.module';
import { UserRepository } from '../user/user.repository';

@Module({
    imports: [
        TypeOrmModule.forFeature([HoraRepository, UserRepository]),
        AuthModule,
    ],
    providers: [HoraService],
    controllers: [HoraController],
})
export class HoraModule { }
