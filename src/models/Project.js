import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { Task } from "../models/Task.js";

export const Project = sequelize.define("Project", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER,
  },
  description: {
    type: DataTypes.STRING,
  },
});

Project.hasMany(Task, {
  foreignKey: "projectId",
  sourceKey: "id",
});

Task.belongsTo(Project, {
  foreignKey: "projectId",
  targetKey: "id",
});
