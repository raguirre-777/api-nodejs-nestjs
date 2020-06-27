import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HoraRepository } from './hora.repository';
import { HoraService } from './hora.service';
import { HoraController } from './hora.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([HoraRepository]),
    ],
    providers: [HoraService],
    controllers: [HoraController],
})
export class HoraModule { }
