import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/user/user.entity';
import { Servicio } from 'src/modules/servicio/servicio.entity';


export class HoraDto {
  id: number;

  @ApiProperty({
    title: 'Valor de Hora',
    example: '1000',
  })
  valor: number;

  @ApiProperty({
    title: 'Fecha Compromiso',
    example: '2019-11-18',
  })
  fecha_compromiso: Date;

  @ApiProperty({
    title: 'Servicio',
    example: 'limpieza',
  })
  servicio: string;

  @ApiProperty({
    title: 'Nombre de usuario',
    example: 'jwick',
  })
  user: string;

}
