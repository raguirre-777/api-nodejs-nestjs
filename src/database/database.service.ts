import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from '../config/config.keys';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        type: 'postgres' as 'postgres',
        host: config.get('ec2-3-208-50-226.compute-1.amazonaws.com'),
        username: config.get('qdkyrwgcvtrihy'),
        port: 5432,
        database: config.get('d7blavbuu1scb7'),
        password: config.get('14df3c4b263a2e4f8178b576cceca7013c874dcfdd42fa769277e7a5d92dda2b'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
