import { RoleType } from 'src/modules/role/roletype.enum';


export class UserDto {

  id: number;
  username: string;
  email: string;
  roles: RoleType[];


}
