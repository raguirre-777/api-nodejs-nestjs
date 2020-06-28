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
import { RoleService } from './role.service';
import { Role } from './role.entity';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from './guards/role.guard';
import { Roles } from './decorators/role.decorator';

@ApiTags('Mantenedor de Roles')
@Controller('roles')
@ApiBearerAuth()
export class RoleController {
  constructor(private readonly _roleService: RoleService) { }

  @Get(':id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async getRole(@Param('id', ParseIntPipe) id: number): Promise<Role> {
    const role = await this._roleService.get(id);
    return role;
  }

  @Get()
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async getRoles(): Promise<Role[]> {
    const roles = await this._roleService.getAll();
    return roles;
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async createRole(@Body() role: Role): Promise<Role> {
    const createdRole = await this._roleService.create(role);
    return createdRole;
  }

  @Patch(':id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async updateRole(@Param('id', ParseIntPipe) id: number, @Body() role: Role) {
    await this._roleService.update(id, role);
    return true;
  }

  @Delete(':id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async deleteRole(@Param('id', ParseIntPipe) id: number) {
    await this._roleService.delete(id);
    return true;
  }
}
