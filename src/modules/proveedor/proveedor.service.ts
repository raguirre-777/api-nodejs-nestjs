import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ProveedorRepository } from './proveedor.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Proveedor } from './proveedor.entity';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(ProveedorRepository)
    private readonly _proveedorRespository: ProveedorRepository,
  ) { }

  async get(id: number): Promise<Proveedor> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const pro: Proveedor = await this._proveedorRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!pro) {
      throw new NotFoundException();
    }

    return pro;
  }

  async getAll(): Promise<Proveedor[]> {
    const provs: Proveedor[] = await this._proveedorRespository.find({
      where: { status: 'ACTIVE' },
    });

    return provs;
  }

  async create(prov: Proveedor): Promise<Proveedor> {
    const savedProv: Proveedor = await this._proveedorRespository.save(prov);
    return savedProv;
  }

  async update(id: number, prov: Proveedor): Promise<void> {
    await this._proveedorRespository.update(id, prov);
  }

  async delete(id: number): Promise<void> {
    const provExist = await this._proveedorRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!provExist) {
      throw new NotFoundException();
    }

    await this._proveedorRespository.update(id, { status: 'INACTIVE' });
  }

}
