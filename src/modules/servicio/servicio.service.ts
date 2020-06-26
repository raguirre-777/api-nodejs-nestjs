import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ServicioRepository } from './servicio.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Servicio } from './servicio.entity';

@Injectable()
export class ServicioService {
  constructor(
    @InjectRepository(ServicioRepository)
    private readonly _ServicioRespository: ServicioRepository,
  ) { }

  async get(id: number): Promise<Servicio> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const pro: Servicio = await this._ServicioRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!pro) {
      throw new NotFoundException();
    }

    return pro;
  }

  async getAll(): Promise<Servicio[]> {
    const provs: Servicio[] = await this._ServicioRespository.find({
      where: { status: 'ACTIVE' },
    });

    return provs;
  }

  async create(prov: Servicio): Promise<Servicio> {
    const savedProv: Servicio = await this._ServicioRespository.save(prov);
    return savedProv;
  }

  async update(id: number, prov: Servicio): Promise<void> {
    await this._ServicioRespository.update(id, prov);
  }

  async delete(id: number): Promise<void> {
    const provExist = await this._ServicioRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!provExist) {
      throw new NotFoundException();
    }

    await this._ServicioRespository.update(id, { status: 'INACTIVE' });
  }

}
