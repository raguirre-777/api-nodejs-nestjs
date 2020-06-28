import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenPedidoRepository } from './orden-pedido.repository';
import { OrdenPedidoService } from './orden-pedido.service';
import { OrdenPedidoController } from './orden-pedido.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrdenPedidoRepository]),
        AuthModule,
    ],
    providers: [OrdenPedidoService],
    controllers: [OrdenPedidoController],
})
export class OrdenPedidoModule { }
