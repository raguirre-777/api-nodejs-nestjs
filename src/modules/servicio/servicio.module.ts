import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioRepository } from './servicio.repository';
import { ServicioService } from './servicio.service';
import { ServicioController } from './servicio.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([ServicioRepository]),
    ],
    providers: [ServicioService],
    controllers: [ServicioController],
})
export class ServicioModule { }
