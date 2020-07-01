import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProveedorRepository } from './proveedor.repository';
import { ProveedorService } from './proveedor.service';
import { ProveedorController } from './proveedor.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
    imports: [
        TypeOrmModule.forFeature([ProveedorRepository]),
        AuthModule,
    ],
    providers: [ProveedorService],
    controllers: [ProveedorController],
})
export class ProveedorModule { }
