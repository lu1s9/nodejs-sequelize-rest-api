import { Router } from 'express';
import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

import validation from '../middlewares/validationMiddleware.js';
import taskSchema from '../validators/taskValidator.js';

const router = Router();

router.get('/', getTasks);
router.get('/:id', getTask);
router.post('/', validation(taskSchema), createTask);
router.put('/:id', validation(taskSchema), updateTask);
router.delete('/:id', deleteTask);

export default router;
