import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ProductoRepository } from './producto.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from './producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(ProductoRepository)
    private readonly _ProductoRespository: ProductoRepository,
  ) { }

  async get(id: number): Promise<Producto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const pro: Producto = await this._ProductoRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!pro) {
      throw new NotFoundException();
    }

    return pro;
  }

  async getAll(): Promise<Producto[]> {
    const provs: Producto[] = await this._ProductoRespository.find({
      where: { status: 'ACTIVE' },
    });

    return provs;
  }

  async create(prov: Producto): Promise<Producto> {
    const savedProv: Producto = await this._ProductoRespository.save(prov);
    return savedProv;
  }

  async update(id: number, prov: Producto): Promise<void> {
    await this._ProductoRespository.update(id, prov);
  }

  async delete(id: number): Promise<void> {
    const provExist = await this._ProductoRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!provExist) {
      throw new NotFoundException();
    }

    await this._ProductoRespository.update(id, { status: 'INACTIVE' });
  }

}
