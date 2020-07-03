import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '../config/config.module';
import { ConfigService } from '../config/config.service';
import { ConnectionOptions } from 'typeorm';
import { Inject } from '@nestjs/common';
import * as dotenv from 'dotenv';
dotenv.config();

export const databaseProviders = [
    TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        inject: [ConfigService],
        async useFactory(config: ConfigService) {
            return {
                //connectionString: 'postgresql://postgres:tbojodcnnbekks:15e204b56bcc9e4e60b7e97e4c3080455b35f71dd922961a4caeff00196cd35d@ec2-3-208-50-226.compute-1.amazonaws.com:5432/d7blavbuu1scb7',
                connectString: `${process.env.DB_HOST}:${process.env.PORT}/${
                    process.env.DATA_BASE
                    }`,
                // ssl: {
                //     rejectUnauthorized: false
                // },
                dialect: "postgres",
                operatorsAliases: false,
                type: 'postgres' as 'postgres',
                host: config.get(process.env.DB_HOST),
                username: config.get(process.env.DB_USERNAME),
                port: 5432,
                database: config.get(process.env.DB_NAME),
                password: config.get(process.env.DB_PASSWORD),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
            } as ConnectionOptions;
        },
    }),
];
