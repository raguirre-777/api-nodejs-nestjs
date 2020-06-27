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

import { ApiTags } from '@nestjs/swagger';
import { ProductoDto } from './dto/producto.dto';
import { Producto } from './producto.entity';

@ApiTags('Mantenedor de Producto')
@Controller('producto')
export class ProductoController {
  constructor(private readonly _productoService: ProductoService) { }

  @Get(':id')
  async getProducto(@Param('id', ParseIntPipe) id: number): Promise<ProductoDto> {
    const producto = await this._productoService.get(id);
    return producto;
  }
  @Get()
  async getProductos(): Promise<ProductoDto[]> {
    const productos = await this._productoService.getAll();
    return productos;
  }

  @Post()
  async createProducto(@Body() producto: ProductoDto): Promise<ProductoDto> {
    const createdProducto = await this._productoService.create(producto);
    return createdProducto;
  }

  @Patch(':id')
  async updateProducto(@Param('id', ParseIntPipe) id: number, @Body() producto: ProductoDto) {
    const updatedProducto = await this._productoService.update(id, producto);
    return true;
  }

  @Delete(':id')
  async deleteProducto(@Param('id', ParseIntPipe) id: number) {
    await this._productoService.delete(id);
    return true;
  }


}
