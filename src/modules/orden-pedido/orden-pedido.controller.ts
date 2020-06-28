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

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { OrdenPedidoDto } from './dto/orden-pedido.dto';
import { OrdenPedido } from './orden-pedido.entity';
import { Roles } from '../role/decorators/role.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../role/guards/role.guard';

@ApiTags('Solicitud Orden de Pedido')
@Controller('orden_pedido')
@ApiBearerAuth()
export class OrdenPedidoController {
  constructor(private readonly _ordenPedidoService: OrdenPedidoService) { }

  @Get(':id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async getOrdenPedido(@Param('id', ParseIntPipe) id: number): Promise<OrdenPedidoDto> {
    const ordenPedido = await this._ordenPedidoService.get(id);
    return ordenPedido;
  }
  @Get()
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async getOrdenPedidos(): Promise<OrdenPedidoDto[]> {
    const ordenPedidos = await this._ordenPedidoService.getAll();
    return ordenPedidos;
  }

  @Post('recepcionar/:id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async recepcionarOrdenPedido(@Param('id', ParseIntPipe) id: number) {
    await this._ordenPedidoService.reception(id);
    return true;
  }

  @Post('anular/:id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async anularOrdenPedido(@Param('id', ParseIntPipe) id: number) {
    await this._ordenPedidoService.delete(id);
    return true;
  }

  @Post('solicitud/')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async pedirOrdenPedido(@Body() ordenPedido: OrdenPedidoDto): Promise<OrdenPedidoDto> {
    const createdOrdenPedido = await this._ordenPedidoService.create(ordenPedido);
    return createdOrdenPedido;
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async createOrdenPedido(@Body() ordenPedido: OrdenPedidoDto): Promise<OrdenPedidoDto> {
    const createdOrdenPedido = await this._ordenPedidoService.create(ordenPedido);
    return createdOrdenPedido;
  }

  @Patch(':id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async updateOrdenPedido(@Param('id', ParseIntPipe) id: number, @Body() ordenPedido: OrdenPedidoDto) {
    const updatedOrdenPedido = await this._ordenPedidoService.update(id, ordenPedido);
    return true;
  }

  @Delete(':id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async deleteOrdenPedido(@Param('id', ParseIntPipe) id: number) {
    await this._ordenPedidoService.delete(id);
    return true;
  }


}
