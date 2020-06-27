import { ExtractJwt } from 'passport-jwt';
import * as os from 'os';
import * as dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  name: process.env.NAME || 'nest-app',
  database: {
    type: process.env.DB_DLS_TYPE,
    connectString: `${process.env.DB_HOST}:${process.env.DB_PORT}/${
      process.env.DB_SERVICE
      }`,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
    // migrations: [__dirname + '/../**/*.migration{.ts ,.js}'],
    // migrationsRun: true,
    synchronize: process.env.DEV ? true : false,
    logging: process.env.DEV ? true : false,
  },
  Jwt: {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    ignoreExpiration: true,
    secretOrKey: process.env.JWT_SECRET,
  },
  logstash: {
    hostname: process.env.LOGSTASH_HOST,
    port: parseInt(process.env.LOGSTASH_PORT, 10),
    node: os.hostname() + '_' + process.env.LOGSTASH_NODE,
  },
};
