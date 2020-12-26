const fs = require("fs");
require("dotenv").config(); // Loads environment variables from a .env file into process.env

module.exports = {
  type: "mysql",
  host: process.env.TYPEORM_HOST,
  port: 3306,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  charset: "utf8mb4_unicode_ci",
  timezone: "+09:00",
  synchronize: false,
  entities: ["src/**/*.entity.ts"],
  migrationsTableName: "migration",
  migrations: ["migration/*.ts"],
  cli: {
    migrationsDir: "migration",
  },
  logging: true,
};
