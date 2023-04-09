import Project from '../models/Project.js';
import Task from '../models/Task.js';

export const getProjects = async (req, res) => {
  const projects = await Project.findAll();
  if (projects.length <= 0) throw new Error('No projects');
  return res.json(projects);
};

export const createProject = async (req, res) => {
  const newProject = await Project.create(req.body);
  return res.json(newProject);
};

export const getProject = async (req, res) => {
  const project = await Project.findOne({ where: { id: req.params.id } });
  if (!project) throw new Error('Project not found');
  return res.json(project);
};

export const updateProject = async (req, res) => {
  const { name, priority, description } = req.body;
  const project = await Project.findByPk(req.params.id);
  if (!project) throw new Error('Project not found');
  project.name = name;
  project.priority = priority;
  project.description = description;
  await project.save();
  return res.json(project);
};

export const deleteProject = async (req, res) => {
  const deletedProject = await Project.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (!deletedProject) throw new Error('Project not found');
  return res.sendStatus(204);
};

export const getProjectTasks = async (req, res) => {
  const projectTasks = await Task.findAll({
    where: {
      projectId: req.params.id,
    },
  });
  if (projectTasks.length <= 0)
    throw new Error('No tasks associated to this project');
  return res.json(projectTasks);
};
