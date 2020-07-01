import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { User } from './user.entity';
import { Roles } from '../role/decorators/role.decorator';
import { RoleGuard } from '../role/guards/role.guard';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('Mantenedor de Usuarios')
@Controller('users')
export class UserController {
  constructor(private readonly _userService: UserService) { }

  @Get(':id')
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    const user = await this._userService.get(id);
    return user;
  }

  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  @Get()
  async getUsers(): Promise<User[]> {
    const users = await this._userService.getAll();
    return users;
  }

  @Post()
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async createUser(@Body() user: User): Promise<User> {
    const createdUser = await this._userService.create(user);
    return createdUser;
  }

  @Patch(':id')
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: User) {
    const updatedUser = await this._userService.update(id, user);
    return true;
  }

  @Delete(':id')
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    await this._userService.delete(id);
    return true;
  }
  @Post('setRole/:userId/:roleId')
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async setRoleToUser(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('roleId', ParseIntPipe) roleId: number,
  ) {
    return this._userService.setRoleToUser(userId, roleId);
  }

}
