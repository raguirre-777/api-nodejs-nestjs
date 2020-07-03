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
                connectString: 'postgresql://postgres:tbojodcnnbekks:15e204b56bcc9e4e60b7e97e4c3080455b35f71dd922961a4caeff00196cd35d@ec2-35-153-12-59.compute-1.amazonaws.com:5432/d2d4d7kcvkfvsc', type: 'postgres',
                ssl: {
                    rejectUnauthorized: false
                },
                host: process.env.DB_HOST,
                username: process.env.DB_USERNAME,
                port: 5432,
                database: process.env.DB_NAME,
                password: process.env.DB_PASSWORD,
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                migrations: [__dirname + '/migrations/*{.ts,.js}'],
            } as ConnectionOptions;
        },
    }),
];
