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
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { ProveedorDto } from './dto/proveedor.dto';
import { Roles } from '../role/decorators/role.decorator';
import { AuthGuard } from '@nestjs/passport';
import { RoleGuard } from '../role/guards/role.guard';

@ApiTags('Mantenedor de Proveedores')
@Controller('proveedor')
@ApiBearerAuth()
export class ProveedorController {
  constructor(private readonly _proveedorService: ProveedorService) { }

  @Get(':id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async getProveedor(@Param('id', ParseIntPipe) id: number): Promise<ProveedorDto> {
    const proveedor = await this._proveedorService.get(id);
    return proveedor;
  }
  @Get()
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async getProveedors(): Promise<ProveedorDto[]> {
    const proveedors = await this._proveedorService.getAll();
    return proveedors;
  }

  @Post()
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async createProveedor(@Body() proveedor: ProveedorDto): Promise<ProveedorDto> {
    const createdProveedor = await this._proveedorService.create(proveedor);
    return createdProveedor;
  }

  @Patch(':id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async updateProveedor(@Param('id', ParseIntPipe) id: number, @Body() proveedor: ProveedorDto) {
    const updatedProveedor = await this._proveedorService.update(id, proveedor);
    return true;
  }

  @Delete(':id')
  @Roles('ADMIN')
  @UseGuards(AuthGuard(), RoleGuard)
  async deleteProveedor(@Param('id', ParseIntPipe) id: number) {
    await this._proveedorService.delete(id);
    return true;
  }


}
