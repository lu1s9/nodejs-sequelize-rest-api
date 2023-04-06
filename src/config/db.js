import * as dotenv from "dotenv";
dotenv.config();
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  { host: process.env.DB_HOST, dialect: "postgres", port: process.env.DB_PORT }
);
