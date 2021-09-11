"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config/config");
const connectionManager = typeorm_1.getConnectionManager();
exports.connection = connectionManager.create({
    type: "mysql",
    host: config_1.config.TYPEORM_HOST,
    port: config_1.config.DOCKER_SQL_PORT,
    username: config_1.config.TYPEORM_USERNAME,
    password: config_1.config.TYPEORM_PASSWORD,
    database: config_1.config.TYPEORM_DATABASE,
    charset: "utf8mb4_unicode_ci",
    timezone: "+09:00",
    synchronize: false,
    entities: [`${__dirname}/../**/*.entity.{ts,js}`],
    logging: true,
});
//# sourceMappingURL=dbconnect.js.map