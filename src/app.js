import express from 'express';
import helmet from 'helmet';
import projectRoutes from './routes/projects.routes.js';
import taskRoutes from './routes/task.routes.js';
import notFound from './middlewares/notFound.js';
import errorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(helmet());
app.use(express.json());
app.use('/projects/', projectRoutes);
app.use('/tasks/', taskRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
