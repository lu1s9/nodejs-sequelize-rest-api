import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  done: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
