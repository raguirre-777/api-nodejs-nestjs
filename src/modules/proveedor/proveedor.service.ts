import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ProveedorRepository } from './proveedor.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProveedorDto } from './dto/proveedor.dto';


@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(ProveedorRepository)
    private readonly _proveedorRespository: ProveedorRepository,
  ) { }

  async get(id: number): Promise<ProveedorDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const pro: ProveedorDto = await this._proveedorRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!pro) {
      throw new NotFoundException();
    }

    return pro;
  }

  async getAll(): Promise<ProveedorDto[]> {
    const provs: ProveedorDto[] = await this._proveedorRespository.find({
      where: { status: 'ACTIVE' },
    });

    return provs;
  }

  async create(prov: ProveedorDto): Promise<ProveedorDto> {
    const savedProv: ProveedorDto = await this._proveedorRespository.save(prov);
    return savedProv;
  }

  async update(id: number, prov: ProveedorDto): Promise<void> {
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
