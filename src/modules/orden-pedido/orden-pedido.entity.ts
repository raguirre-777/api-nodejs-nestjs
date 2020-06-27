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

@Entity('orden_pedido')
export class OrdenPedido extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'numeric', nullable: false })
  valor: number;

  @Column({ type: 'varchar', length: 25, nullable: false })
  proveedor: string;

  @Column({ type: 'varchar', length: 25, nullable: false })
  producto: string;

  @Column({ type: 'varchar', default: 'ACTIVE', length: 200 })
  status: string;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;
}
