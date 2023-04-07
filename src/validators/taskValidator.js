import Joi from 'joi';

const taskSchema = Joi.object({
  name: Joi.string().trim().min(5).max(100)
    .required(),
  done: Joi.boolean(),
  projectId: Joi.number().integer().required(),
});

export default taskSchema;
