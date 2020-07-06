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
import { ServicioService } from './servicio.service';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ServicioDto } from './dto/servicio.dto';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../role/decorators/role.decorator';
import { RoleGuard } from '../role/guards/role.guard';

//@ApiBearerAuth()
@ApiTags('Mantenedor de Servicio')
@Controller('servicio')
export class ServicioController {
  constructor(private readonly _servicioService: ServicioService) { }

  @Get(':id')
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async getServicio(@Param('id', ParseIntPipe) id: number): Promise<ServicioDto> {
    const servicio = await this._servicioService.get(id);
    return servicio;
  }

  @Get()
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async getServicios(): Promise<ServicioDto[]> {
    const servicio = await this._servicioService.getAll();
    return servicio;
  }

  @Post()
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async createServicio(@Body() servicio: ServicioDto): Promise<ServicioDto> {
    const createdServicio = await this._servicioService.create(servicio);
    return createdServicio;
  }

  @Patch(':id')
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async updateServicio(@Param('id', ParseIntPipe) id: number, @Body() servicio: ServicioDto) {
    const updatedServicio = await this._servicioService.update(id, servicio);
    return true;
  }

  @Delete(':id')
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async deleteServicio(@Param('id', ParseIntPipe) id: number) {
    await this._servicioService.delete(id);
    return true;
  }


}
