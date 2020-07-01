import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoRepository } from './producto.repository';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProductoRepository]),
        AuthModule,
    ],
    providers: [ProductoService],
    controllers: [ProductoController],
})
export class ProductoModule { }
