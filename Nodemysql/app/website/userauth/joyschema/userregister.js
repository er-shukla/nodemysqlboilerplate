const Joi = require('joi');

const userSchema = Joi.object({
  first_name: Joi.string().min(3).max(30).required().messages({
    "any.required": "First name is required.",
    "string.empty": "First name cannot be empty.",
  }),
  email: Joi.string().email().required().messages({
    "any.required": "Email is required.",
    "string.empty": "Email cannot be empty.",
    "string.email": "Invalid email format.",
  }),
  mobile_number: Joi.string()
  .length(10)
  .pattern(/[6-9]{1}[0-9]{9}/)
  .required()
  .messages({
    "any.required": "Phone number is required.",
    "string.empty": "Phone number cannot be empty.",
    "string.length": "Phone number must be exactly 10 digits long.",
    "string.pattern.base": "Phone number is invalid.",
  }),
}).required();

module.exports = {
  userSchema,
};
