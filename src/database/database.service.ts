import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Configuration } from '../config/config.keys';
import { Inject } from '@nestjs/common';

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory(config: ConfigService) {
      return {
        //connectionString: 'postgresql://postgres:hmvtnuarzwjnaw:6156115253a9f7fc3ea4b25b234a30ae92b997fad6772d1a858e39f7d2f26138@ec2-3-223-21-106.compute-1.amazonaws.com:5432/d5acll7eo994ic',
        // ssl: {
        //   rejectUnauthorized: false
        // },
        ssl: false,
        dialect: "postgres",
        operatorsAliases: false,
        type: 'postgres' as 'postgres',
        host: config.get(Configuration.HOST),
        username: config.get(Configuration.USERNAME),
        port: 5432,
        database: config.get(Configuration.DATABASE),
        password: config.get(Configuration.PASSWORD),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        migrations: [__dirname + '/migrations/*{.ts,.js}'],
      } as ConnectionOptions;
    },
  }),
];
