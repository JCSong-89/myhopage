import dotenv from "dotenv";

dotenv.config();

class ConfigServer {
  TYPEORM_HOST: string;
  TYPEORM_USERNAME: string;
  TYPEORM_PASSWORD: string;
  TYPEORM_DATABASE: string;
  DOCKER_SQL_PORT: number;
  SERVER_PORT: number;

  constructor() {
    this.TYPEORM_HOST = <any>process.env.TYPEORM_HOST;
    this.TYPEORM_USERNAME = <any>process.env.TYPEORM_USERNAME;
    this.TYPEORM_PASSWORD = <any>process.env.TYPEORM_PASSWORD;
    this.TYPEORM_DATABASE = <any>process.env.TYPEORM_DATABASE;
    this.SERVER_PORT = <any>process.env.SERVER_PORT || 3000;
    this.DOCKER_SQL_PORT = <any>process.env.DOCKER_SQL_PORT || 10510;
  }
}

export const config = new ConfigServer();
