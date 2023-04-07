import express from 'express';
import helmet from 'helmet';
import projectRoutes from './routes/projects.routes.js';
import taskRoutes from './routes/task.routes.js';

const app = express();

app.use(helmet());
app.use(express.json());
app.use('/projects/', projectRoutes);
app.use('/tasks/', taskRoutes);

app.use((req, res) => {
  return res.status(404).json({ message: "Sorry, can't find that!" });
});

export default app;
