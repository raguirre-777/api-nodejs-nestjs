import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedorRepository } from './proveedor.repository';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { SharedModule } from '../../shared/shared.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProveedorRepository]),
        SharedModule,
    ],
    providers: [ProveedorService],
    controllers: [ProveedorController],
})
export class ProveedorModule { }
