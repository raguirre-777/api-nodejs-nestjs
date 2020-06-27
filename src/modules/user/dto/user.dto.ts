import { RoleType } from 'src/modules/role/roletype.enum';
import { ApiProperty } from '@nestjs/swagger';


export class UserDto {

  @ApiProperty({
    title: 'Id ',
    example: '1',
  })
  id: number;
  @ApiProperty({
    title: 'Usuario',
    example: 'jwick',
  })
  username: string;
  @ApiProperty({
    title: 'Correo electronico',
    example: 'john.wick@lid.com',
  })
  email: string;
  @ApiProperty({
    title: 'Rol ',
  })
  roles: RoleType[];


}
