import { DataSource } from 'typeorm';
import dotenv from 'dotenv';

dotenv.config();
const USER_NAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;
const DATABASE_NAME = process.env.DATABASE_NAME;
const HOST = process.env.HOST;
export const dataSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'postgres',
    host: HOST,
    port: 5432,
    username: USER_NAME,
    password: PASSWORD,
    database: DATABASE_NAME,
    logging: false,
    synchronize: false,
    name: 'default',
    entities: ['src/node_api/models/**.ts'],
    migrations: ['src/node_api/migrations/**/*{.ts,.js}'],
    subscribers: ['src/node_api/subscriber/**/*{.ts,.js}'],
});