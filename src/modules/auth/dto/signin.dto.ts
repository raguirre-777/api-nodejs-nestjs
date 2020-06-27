import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SigninDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    title: 'Usuario',
    example: 'jwick',
  })
  username: string;


  @ApiProperty({
    title: 'Contraseña',
    example: 'root..',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
