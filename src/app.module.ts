import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { RoleModule } from './modules/role/role.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { ServicioModule } from './modules/servicio/servicio.module';
import { ProductoModule } from './modules/producto/producto.module';
import { AuthModule } from './modules/auth/auth.module';
import { HoraModule } from './modules/hora/hora.module';
import { OrdenPedidoModule } from './modules/orden-pedido/orden-pedido.module';


@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UserModule,
    RoleModule,
    ProveedorModule,
    ProductoModule,
    ServicioModule,
    AuthModule,
    HoraModule,
    OrdenPedidoModule,
  ],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
  }
}
