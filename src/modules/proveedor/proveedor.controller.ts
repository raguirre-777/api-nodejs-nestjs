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
import { ApiTags } from '@nestjs/swagger';
import { ProveedorDto } from './dto/proveedor.dto';

@ApiTags('Mantenedor de Proveedores')
@Controller('proveedor')
export class ProveedorController {
  constructor(private readonly _proveedorService: ProveedorService) { }

  @Get(':id')
  async getProveedor(@Param('id', ParseIntPipe) id: number): Promise<ProveedorDto> {
    const proveedor = await this._proveedorService.get(id);
    return proveedor;
  }
  @Get()
  async getProveedors(): Promise<ProveedorDto[]> {
    const proveedors = await this._proveedorService.getAll();
    return proveedors;
  }

  @Post()
  async createProveedor(@Body() proveedor: ProveedorDto): Promise<ProveedorDto> {
    const createdProveedor = await this._proveedorService.create(proveedor);
    return createdProveedor;
  }

  @Patch(':id')
  async updateProveedor(@Param('id', ParseIntPipe) id: number, @Body() proveedor: ProveedorDto) {
    const updatedProveedor = await this._proveedorService.update(id, proveedor);
    return true;
  }

  @Delete(':id')
  async deleteProveedor(@Param('id', ParseIntPipe) id: number) {
    await this._proveedorService.delete(id);
    return true;
  }


}
