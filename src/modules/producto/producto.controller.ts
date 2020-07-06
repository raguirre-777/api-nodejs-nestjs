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
import { ProductoService } from './producto.service';

import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ProductoDto } from './dto/producto.dto';
import { Producto } from './producto.entity';
import { RoleGuard } from '../role/guards/role.guard';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../role/decorators/role.decorator';

@ApiTags('Mantenedor de Producto')
@Controller('producto')
//@ApiBearerAuth()
export class ProductoController {
  constructor(private readonly _productoService: ProductoService) { }

  @Get(':id')
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async getProducto(@Param('id', ParseIntPipe) id: number): Promise<ProductoDto> {
    const producto = await this._productoService.get(id);
    return producto;
  }
  @Get()
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async getProductos(): Promise<ProductoDto[]> {
    const productos = await this._productoService.getAll();
    return productos;
  }

  @Post()
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async createProducto(@Body() producto: ProductoDto): Promise<ProductoDto> {
    const createdProducto = await this._productoService.create(producto);
    return createdProducto;
  }

  @Patch(':id')
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async updateProducto(@Param('id', ParseIntPipe) id: number, @Body() producto: ProductoDto) {
    const updatedProducto = await this._productoService.update(id, producto);
    return true;
  }

  @Delete(':id')
  // @Roles('ADMIN')
  // @UseGuards(AuthGuard(), RoleGuard)
  async deleteProducto(@Param('id', ParseIntPipe) id: number) {
    await this._productoService.delete(id);
    return true;
  }


}
