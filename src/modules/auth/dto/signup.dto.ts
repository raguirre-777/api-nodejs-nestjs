import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    title: 'Usuario ',
    example: 'jwick',
  })
  username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    title: 'Correo Electronico',
    example: 'jwick@correo.cl',
  })
  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    title: 'Contraseña',
    example: 'root..',
  })
  password: string;
}
