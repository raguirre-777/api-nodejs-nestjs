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
import { HoraService } from './hora.service';

import { ApiTags } from '@nestjs/swagger';
import { HoraDto } from './dto/hora.dto';
import { Hora } from './hora.entity';

@ApiTags('Solicitud de Hora')
@Controller('hora')
export class HoraController {
  constructor(private readonly _horaService: HoraService) { }

  @Get(':id')
  async getHora(@Param('id', ParseIntPipe) id: number): Promise<HoraDto> {
    const Hora = await this._horaService.get(id);
    return Hora;
  }
  @Get()
  async getHoras(): Promise<HoraDto[]> {
    const horas = await this._horaService.getAll();
    return horas;
  }

  @Post('anular/:id')
  async anularHora(@Param('id', ParseIntPipe) id: number) {
    await this._horaService.delete(id);
    return true;
  }

  @Post('solicitud/')
  async pedirHora(@Body() hora: HoraDto): Promise<HoraDto> {
    const createdHora = await this._horaService.create(hora);
    return createdHora;
  }

  @Post()
  async createHora(@Body() hora: HoraDto): Promise<HoraDto> {
    const createdHora = await this._horaService.create(hora);
    return createdHora;
  }

  @Patch(':id')
  async updateHora(@Param('id', ParseIntPipe) id: number, @Body() hora: HoraDto) {
    const updatedHora = await this._horaService.update(id, hora);
    return true;
  }

  @Delete(':id')
  async deleteHora(@Param('id', ParseIntPipe) id: number) {
    await this._horaService.delete(id);
    return true;
  }


}
