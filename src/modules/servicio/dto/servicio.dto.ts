import { RoleType } from 'src/modules/role/roletype.enum';
import { ApiProperty } from '@nestjs/swagger';


export class ServicioDto {

  id: number;
  @ApiProperty({
    title: 'Nombre de Servicio',
    example: 'limpieza dental',
  })
  name: string;
  @ApiProperty({
    title: 'Codigo',
    example: '29200',
  })
  codigo: string;
  @ApiProperty({
    title: 'Descripcion de Servicio',
    example: 'limpieza dental hasta la punta de la lengua',
  })
  description: string;

}
