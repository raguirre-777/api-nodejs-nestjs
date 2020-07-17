import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { HoraRepository } from './hora.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { HoraDto } from './dto/hora.dto';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/user.entity';


@Injectable()
export class HoraService {
  constructor(
    @InjectRepository(HoraRepository)
    private readonly _horaRespository: HoraRepository,
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
  ) { } z

  async get(id: number): Promise<HoraDto> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const pro: HoraDto = await this._horaRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!pro) {
      throw new NotFoundException();
    }

    return pro;
  }


  async getHoraUser(id: number): Promise<HoraDto[]> {

    if (!id) {
      throw new BadRequestException('id must be sent');
    }
    const user: User = await this._userRepository.findOne(id);
    if (!user) {
      throw new BadRequestException('no encontré el usuario');
    }
    const provs: HoraDto[] = await this._horaRespository.find({
      where: { user: user.username, status: 'ACTIVE' },
    });

    if (!provs) {
      throw new BadRequestException('no encontré horas');
    }

    return provs;
  }

  async getAll(): Promise<HoraDto[]> {
    const provs: HoraDto[] = await this._horaRespository.find({
      where: { status: 'ACTIVE' },
    });

    return provs;
  }

  async create(prov: HoraDto): Promise<HoraDto> {
    const savedProv: HoraDto = await this._horaRespository.save(prov);
    return savedProv;
  }

  async update(id: number, prov: HoraDto): Promise<void> {
    await this._horaRespository.update(id, prov);
  }

  async delete(id: number): Promise<void> {
    const provExist = await this._horaRespository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!provExist) {
      throw new NotFoundException();
    }

    await this._horaRespository.update(id, { status: 'INACTIVE' });
  }

}
