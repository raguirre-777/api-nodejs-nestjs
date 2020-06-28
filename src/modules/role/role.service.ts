import {
  Injectable,
  BadRequestException,
  NotFoundException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { RoleRepository } from './role.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(RoleRepository)
    private readonly _roleRepository: RoleRepository,
  ) { }

  async get(id: number): Promise<Role> {
    if (!id) {
      throw new BadRequestException('id must be sent');
    }

    const role: Role = await this._roleRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!role) {
      throw new NotFoundException();
    }

    return role;
  }

  async getAll(): Promise<Role[]> {
    const roles: Role[] = await this._roleRepository.find({
      where: { status: 'ACTIVE' },
    });

    return roles;
  }

  async create(role: Role): Promise<Role> {
    if (role === undefined) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'Debe incluir body',
        },
        400,
      );
    }
    if (role.name === undefined || role.name === null || role.description === undefined || role.description === null) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error: 'debe incluir name y description',
        },
        400,
      );
    }
    const savedRole: Role = await this._roleRepository.save(role);
    return savedRole;
  }

  async update(id: number, role: Role): Promise<void> {
    await this._roleRepository.update(id, role);
  }

  async delete(id: number): Promise<void> {
    const roleExists = await this._roleRepository.findOne(id, {
      where: { status: 'ACTIVE' },
    });

    if (!roleExists) {
      throw new NotFoundException();
    }

    await this._roleRepository.update(id, { status: 'INACTIVE' });
  }
}
