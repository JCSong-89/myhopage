import { getConnectionManager } from "typeorm";
import { config } from "../config/config";

const connectionManager = getConnectionManager();

export const connection = connectionManager.create({
  type: "mysql",
  host: config.TYPEORM_HOST,
  port: config.DOCKER_SQL_PORT,
  username: config.TYPEORM_USERNAME,
  password: config.TYPEORM_PASSWORD,
  database: config.TYPEORM_DATABASE,
  charset: "utf8mb4_unicode_ci",
  timezone: "+09:00",
  synchronize: false,
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  logging: true,
});
