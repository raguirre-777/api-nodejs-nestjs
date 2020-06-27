import { Repository, EntityRepository } from 'typeorm';
import { OrdenPedido } from './orden-pedido.entity';

@EntityRepository(OrdenPedido)
export class OrdenPedidoRepository extends Repository<OrdenPedido> { }
