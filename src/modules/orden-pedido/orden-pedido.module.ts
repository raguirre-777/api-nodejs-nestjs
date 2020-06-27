import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenPedidoRepository } from './orden-pedido.repository';
import { OrdenPedidoService } from './orden-pedido.service';
import { OrdenPedidoController } from './orden-pedido.controller';

@Module({
    imports: [
        TypeOrmModule.forFeature([OrdenPedidoRepository]),
    ],
    providers: [OrdenPedidoService],
    controllers: [OrdenPedidoController],
})
export class OrdenPedidoModule { }
