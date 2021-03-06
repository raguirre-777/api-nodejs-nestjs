import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  JoinTable,
  ManyToMany,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { Hora } from '../hora/hora.entity';

@Entity('servicio')
export class Servicio extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', unique: true, length: 25, nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  codigo: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @OneToMany(() => Hora, (hora: Hora) => hora.servicio)
  horas: Hora[];

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
