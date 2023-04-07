const validation = (schema) => async (req, res, next) => {
  const { body } = req;
  try {
    await schema.validateAsync(body);
    return next();
  } catch (error) {
    const { message } = error;
    return res.status(400).json(message);
  }
};

export default validation;
