import { Router } from "express";
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/taskController.js";

const router = Router();

router.get("/", getTasks);
router.get("/:id", getTask);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;
