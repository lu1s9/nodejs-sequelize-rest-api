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

const router = Router();

router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/', validation(projectValidator), createProject);
router.put('/:id', validation(projectValidator), updateProject);
router.delete('/:id', deleteProject);

router.get('/:id/tasks', getProjectTasks);

export default router;
