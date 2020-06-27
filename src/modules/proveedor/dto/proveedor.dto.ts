import { ApiProperty } from '@nestjs/swagger';


export class ProveedorDto {
  id: number;
  @ApiProperty({
    title: 'Nombre de Proveedor',
    example: 'Falabella SPA',
  })
  name: string;
  @ApiProperty({
    title: 'Codigo',
    example: 'fal-234',
  })
  codigo: string;
  @ApiProperty({
    title: 'Descripcion de Proveedor',
    example: 'proveedor de insumos varios',
  })
  description: string;


}
