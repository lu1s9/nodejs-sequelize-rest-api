import { Router } from "express";
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  getProjectTasks,
} from "../controllers/projects.controllers.js";
const router = Router();

router.get("/", getProjects);
router.get("/:id", getProject);
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

router.get("/:id/tasks", getProjectTasks);

export default router;
