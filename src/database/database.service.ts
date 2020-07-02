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
        //connectionString: 'postgresql://postgres:tbojodcnnbekks:15e204b56bcc9e4e60b7e97e4c3080455b35f71dd922961a4caeff00196cd35d@ec2-3-208-50-226.compute-1.amazonaws.com:5432/d7blavbuu1scb7',
        ssl: {
          rejectUnauthorized: false
        },
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
