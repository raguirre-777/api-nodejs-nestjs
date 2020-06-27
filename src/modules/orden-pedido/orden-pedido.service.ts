import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { OrdenPedidoRepository } from './orden-pedido.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdenPedidoDto } from './dto/orden-pedido.dto';


@Injectable()
export class OrdenPedidoService {
  constructor(
    @InjectRepository(OrdenPedidoRepository)
    private readonly _OrdenPedidoRespository: OrdenPedidoRepository,
  ) { }

  async get(id: number): Promise<OrdenPedidoDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const pro: OrdenPedidoDto = await this._OrdenPedidoRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!pro) {
      throw new NotFoundException();
    }

    return pro;
  }

  async getAll(): Promise<OrdenPedidoDto[]> {
    const provs: OrdenPedidoDto[] = await this._OrdenPedidoRespository.find({
      where: { status: 'ACTIVE' },
    });

    return provs;
  }

  async create(prov: OrdenPedidoDto): Promise<OrdenPedidoDto> {
    const savedProv: OrdenPedidoDto = await this._OrdenPedidoRespository.save(prov);
    return savedProv;
  }

  async update(id: number, prov: OrdenPedidoDto): Promise<void> {
    await this._OrdenPedidoRespository.update(id, prov);
  }

  async delete(id: number): Promise<void> {
    const provExist = await this._OrdenPedidoRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!provExist) {
      throw new NotFoundException();
    }

    await this._OrdenPedidoRespository.update(id, { status: 'INACTIVE' });
  }

  async reception(id: number): Promise<void> {
    const provExist = await this._OrdenPedidoRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!provExist) {
      throw new NotFoundException();
    }

    await this._OrdenPedidoRespository.update(id, { status: 'RECEPT' });
  }
}
