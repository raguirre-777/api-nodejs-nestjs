import { ExtractJwt } from 'passport-jwt';
import * as os from 'os';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  name: process.env.NAME || 'nest-app',
  database: {
    type: process.env.DB_TYPE,
    connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${
      process.env.DB_NAME
      }`,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
    // migrations: [__dirname + '/../**/*.migration{.ts ,.js}'],
    // migrationsRun: true,
    synchronize: false,
    logging: false,
  }
};
