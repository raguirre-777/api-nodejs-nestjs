import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioRepository } from './servicio.repository';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ServicioRepository]),
        AuthModule
    ],
    providers: [ServicioService],
    controllers: [ServicioController],
})
export class ServicioModule { }
