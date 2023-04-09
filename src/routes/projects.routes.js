import { Router } from 'express';
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  getProjectTasks,
} from '../controllers/projects.controllers.js';

import validation from '../middlewares/validationMiddleware.js';
import projectValidator from '../validators/projectValidator.js';
import tryCatch from '../utils/tryCatch.js';

const router = Router();

router.get('/', tryCatch(getProjects));
router.get('/:id', tryCatch(getProject));
router.post('/', validation(projectValidator), tryCatch(createProject));
router.put('/:id', validation(projectValidator), tryCatch(updateProject));
router.delete('/:id', tryCatch(deleteProject));

router.get('/:id/tasks', tryCatch(getProjectTasks));

export default router;
