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
import tryCatch from '../utils/tryCatch.js';

const router = Router();

router.get('/', tryCatch(getTasks));
router.get('/:id', tryCatch(getTask));
router.post('/', validation(taskSchema), tryCatch(createTask));
router.put('/:id', validation(taskSchema), tryCatch(updateTask));
router.delete('/:id', tryCatch(deleteTask));

export default router;
