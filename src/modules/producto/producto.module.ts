import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoRepository } from './producto.repository';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { SharedModule } from '../../shared/shared.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductoRepository]),
        SharedModule,
    ],
    providers: [ProductoService],
    controllers: [ProductoController],
})
export class ProductoModule { }
