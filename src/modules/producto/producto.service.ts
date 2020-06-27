import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ProductoRepository } from './producto.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductoDto } from './dto/producto.dto';


@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(ProductoRepository)
    private readonly _productoRespository: ProductoRepository,
  ) { }

  async get(id: number): Promise<ProductoDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const pro: ProductoDto = await this._productoRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!pro) {
      throw new NotFoundException();
    }

    return pro;
  }

  async getAll(): Promise<ProductoDto[]> {
    const provs: ProductoDto[] = await this._productoRespository.find({
      where: { status: 'ACTIVE' },
    });

    return provs;
  }

  async create(prov: ProductoDto): Promise<ProductoDto> {
    const savedProv: ProductoDto = await this._productoRespository.save(prov);
    return savedProv;
  }

  async update(id: number, prov: ProductoDto): Promise<void> {
    await this._productoRespository.update(id, prov);
  }

  async delete(id: number): Promise<void> {
    const provExist = await this._productoRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!provExist) {
      throw new NotFoundException();
    }

    await this._productoRespository.update(id, { status: 'INACTIVE' });
  }

}
