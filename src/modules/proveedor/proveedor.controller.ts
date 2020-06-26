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
import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.entity';


@Controller('Proveedor')
export class ProveedorController {
  constructor(private readonly _proveedorService: ProveedorService) { }

  @Get(':id')
  async getProveedor(@Param('id', ParseIntPipe) id: number): Promise<Proveedor> {
    const proveedor = await this._proveedorService.get(id);
    return proveedor;
  }
  @Get()
  async getProveedors(): Promise<Proveedor[]> {
    const proveedors = await this._proveedorService.getAll();
    return proveedors;
  }

  @Post()
  async createProveedor(@Body() Proveedor: Proveedor): Promise<Proveedor> {
    const createdProveedor = await this._proveedorService.create(Proveedor);
    return createdProveedor;
  }

  @Patch(':id')
  async updateProveedor(@Param('id', ParseIntPipe) id: number, @Body() Proveedor: Proveedor) {
    const updatedProveedor = await this._proveedorService.update(id, Proveedor);
    return true;
  }

  @Delete(':id')
  async deleteProveedor(@Param('id', ParseIntPipe) id: number) {
    await this._proveedorService.delete(id);
    return true;
  }


}
