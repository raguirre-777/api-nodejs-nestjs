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
  ManyToOne,
} from 'typeorm';
import { Servicio } from '../servicio/servicio.entity';
import { User } from '../user/user.entity';

@Entity('hora')
export class Hora extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'numeric', nullable: false })
  valor: number;

  @Column({ type: 'timestamp', nullable: false })
  fecha_compromiso: Date;

  // @ManyToOne(() => Servicio, (table: Servicio) => table.horas, {})
  // @JoinColumn({ name: 'hora_id' })
  // servicio: Servicio;

  // @OneToOne(() => User, (user: User) => user.hora, {})
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  @Column({ type: 'varchar', length: 25, nullable: true })
  servicio: string;

  @Column({ type: 'varchar', length: 25, nullable: true })
  user: string;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 8 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
