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

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { HoraDto } from './dto/hora.dto';
import { Hora } from './hora.entity';
import { Roles } from '../role/decorators/role.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../role/guards/role.guard';

@ApiTags('Solicitud de Hora')
@Controller('hora')
@ApiBearerAuth()
export class HoraController {
  constructor(private readonly _horaService: HoraService) { }

  @Get(':id')
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async getHora(@Param('id', ParseIntPipe) id: number): Promise<HoraDto> {
    const Hora = await this._horaService.get(id);
    return Hora;
  }
  @Get()
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async getHoras(): Promise<HoraDto[]> {
    const horas = await this._horaService.getAll();
    return horas;
  }

  @Post('anular/:id')
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async anularHora(@Param('id', ParseIntPipe) id: number) {
    await this._horaService.delete(id);
    return true;
  }

  @Post('solicitud/')
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async pedirHora(@Body() hora: HoraDto): Promise<HoraDto> {
    const createdHora = await this._horaService.create(hora);
    return createdHora;
  }

  @Post()
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async createHora(@Body() hora: HoraDto): Promise<HoraDto> {
    const createdHora = await this._horaService.create(hora);
    return createdHora;
  }

  @Patch(':id')
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async updateHora(@Param('id', ParseIntPipe) id: number, @Body() hora: HoraDto) {
    const updatedHora = await this._horaService.update(id, hora);
    return true;
  }

  @Delete(':id')
  @Roles('PACIENTE', 'ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async deleteHora(@Param('id', ParseIntPipe) id: number) {
    await this._horaService.delete(id);
    return true;
  }


}
