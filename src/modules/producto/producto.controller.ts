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
import { Producto } from './producto.entity';


@Controller('Producto')
export class ProductoController {
  constructor(private readonly _ProductoService: ProductoService) { }

  @Get(':id')
  async getProducto(@Param('id', ParseIntPipe) id: number): Promise<Producto> {
    const Producto = await this._ProductoService.get(id);
    return Producto;
  }
  @Get()
  async getProductos(): Promise<Producto[]> {
    const Productos = await this._ProductoService.getAll();
    return Productos;
  }

  @Post()
  async createProducto(@Body() Producto: Producto): Promise<Producto> {
    const createdProducto = await this._ProductoService.create(Producto);
    return createdProducto;
  }

  @Patch(':id')
  async updateProducto(@Param('id', ParseIntPipe) id: number, @Body() Producto: Producto) {
    const updatedProducto = await this._ProductoService.update(id, Producto);
    return true;
  }

  @Delete(':id')
  async deleteProducto(@Param('id', ParseIntPipe) id: number) {
    await this._ProductoService.delete(id);
    return true;
  }


}
