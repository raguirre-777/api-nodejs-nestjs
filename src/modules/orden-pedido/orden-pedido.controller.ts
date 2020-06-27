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
import { OrdenPedidoService } from './orden-pedido.service';

import { ApiTags } from '@nestjs/swagger';
import { OrdenPedidoDto } from './dto/orden-pedido.dto';
import { OrdenPedido } from './orden-pedido.entity';

@ApiTags('Solicitud Orden de Pedido')
@Controller('orden_pedido')
export class OrdenPedidoController {
  constructor(private readonly _ordenPedidoService: OrdenPedidoService) { }

  @Get(':id')
  async getOrdenPedido(@Param('id', ParseIntPipe) id: number): Promise<OrdenPedidoDto> {
    const ordenPedido = await this._ordenPedidoService.get(id);
    return ordenPedido;
  }
  @Get()
  async getOrdenPedidos(): Promise<OrdenPedidoDto[]> {
    const ordenPedidos = await this._ordenPedidoService.getAll();
    return ordenPedidos;
  }

  @Post('recepcionar/:id')
  async recepcionarOrdenPedido(@Param('id', ParseIntPipe) id: number) {
    await this._ordenPedidoService.reception(id);
    return true;
  }

  @Post('anular/:id')
  async anularOrdenPedido(@Param('id', ParseIntPipe) id: number) {
    await this._ordenPedidoService.delete(id);
    return true;
  }

  @Post('solicitud/')
  async pedirOrdenPedido(@Body() ordenPedido: OrdenPedidoDto): Promise<OrdenPedidoDto> {
    const createdOrdenPedido = await this._ordenPedidoService.create(ordenPedido);
    return createdOrdenPedido;
  }

  @Post()
  async createOrdenPedido(@Body() ordenPedido: OrdenPedidoDto): Promise<OrdenPedidoDto> {
    const createdOrdenPedido = await this._ordenPedidoService.create(ordenPedido);
    return createdOrdenPedido;
  }

  @Patch(':id')
  async updateOrdenPedido(@Param('id', ParseIntPipe) id: number, @Body() ordenPedido: OrdenPedidoDto) {
    const updatedOrdenPedido = await this._ordenPedidoService.update(id, ordenPedido);
    return true;
  }

  @Delete(':id')
  async deleteOrdenPedido(@Param('id', ParseIntPipe) id: number) {
    await this._ordenPedidoService.delete(id);
    return true;
  }


}
