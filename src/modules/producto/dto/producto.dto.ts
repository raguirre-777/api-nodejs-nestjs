import { ApiProperty } from '@nestjs/swagger';


export class ProductoDto {
  id: number;
  @ApiProperty({
    title: 'Nombre de Producto',
    example: 'guantes',
  })
  name: string;
  @ApiProperty({
    title: 'Codigo',
    example: 'gua-234',
  })
  codigo: string;
  @ApiProperty({
    title: 'Descripcion de Producto',
    example: 'los guantes mas pulentamente de la poblacion',
  })
  description: string;


}
