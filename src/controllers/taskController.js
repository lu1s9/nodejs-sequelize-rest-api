import { Task } from "../models/Task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    if (tasks.length <= 0) {
      return res.status(404).json({ message: "No Tasks" });
    }
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id } });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    task.set(req.body);
    task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = rea.params;
  try {
    const task = await Task.destroy({
      where: {
        id,
      },
    });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
    }
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body;
  try {
    const task = await Task.create({ name, done, projectId });
    res.json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};