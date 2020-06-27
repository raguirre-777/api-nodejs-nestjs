import { Repository, EntityRepository } from 'typeorm';
import { Hora } from './hora.entity';

@EntityRepository(Hora)
export class HoraRepository extends Repository<Hora> { }
