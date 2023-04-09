import Project from '../models/Project.js';
import Task from '../models/Task.js';

export const getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    include: [{ model: Project }],
  });
  if (tasks.length <= 0) throw new Error('No tasks');
  return res.json(tasks);
};

export const getTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id },
    include: [{ model: Project }],
  });
  if (!task) throw new Error('Task not found');
  return res.json(task);
};

export const updateTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  const task = await Task.findOne({ where: { id: req.params.id } });
  if (!task) throw new Error('Task not found');
  const pid = await Project.findOne({ where: { id: projectId } });
  if (!pid) throw new Error('Project ID not valid');
  task.name = name;
  task.done = done;
  task.projectId = projectId;
  task.save();
  return res.json(task);
};

export const deleteTask = async (req, res) => {
  const task = await Task.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (!task) throw new Error('Task not found');
  return res.sendStatus(204);
};

export const createTask = async (req, res) => {
  const project = await Project.findByPk(req.body.projectId);
  if (!project) throw new Error('Project ID not valid');
  const task = await Task.create(req.body);
  res.json(task);
};
