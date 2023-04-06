import Joi from "joi";

const projectSchema = Joi.object({
  name: Joi.string().trim().min(5).max(50).required(),
  priority: Joi.number().integer().required(),
  description: Joi.string().trim().min(10).max(150).required(),
});

export default projectSchema;
