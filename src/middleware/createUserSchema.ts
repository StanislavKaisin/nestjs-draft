import * as joi from 'joi';

export const createUserSchema = joi.object({
  name: joi.string().alphanum().min(3).max(30).required(),
  password: joi.string().alphanum().min(3).max(30).required(),
});
