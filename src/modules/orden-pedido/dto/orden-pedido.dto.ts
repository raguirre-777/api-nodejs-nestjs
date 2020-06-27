import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/user/user.entity';
import { Servicio } from 'src/modules/servicio/servicio.entity';


export class OrdenPedidoDto {
  id: number;

  @ApiProperty({
    title: 'Valor de Pedido',
    example: '1000',
  })
  valor: number;

  @ApiProperty({
    title: 'Producto',
    example: 'guantes',
  })
  producto: string;

  @ApiProperty({
    title: 'Proveedor',
    example: 'Falabella',
  })
  proveedor: string;

}
