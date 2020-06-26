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
import { Servicio } from './servicio.entity';


@Controller('Servicio')
export class ServicioController {
  constructor(private readonly _ServicioService: ServicioService) { }

  @Get(':id')
  async getServicio(@Param('id', ParseIntPipe) id: number): Promise<Servicio> {
    const Servicio = await this._ServicioService.get(id);
    return Servicio;
  }
  @Get()
  async getServicios(): Promise<Servicio[]> {
    const Servicios = await this._ServicioService.getAll();
    return Servicios;
  }

  @Post()
  async createServicio(@Body() Servicio: Servicio): Promise<Servicio> {
    const createdServicio = await this._ServicioService.create(Servicio);
    return createdServicio;
  }

  @Patch(':id')
  async updateServicio(@Param('id', ParseIntPipe) id: number, @Body() Servicio: Servicio) {
    const updatedServicio = await this._ServicioService.update(id, Servicio);
    return true;
  }

  @Delete(':id')
  async deleteServicio(@Param('id', ParseIntPipe) id: number) {
    await this._ServicioService.delete(id);
    return true;
  }


}
