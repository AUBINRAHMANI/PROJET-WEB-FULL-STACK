const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Answer', {
  // answerId: Joi.number().required(),
  value: Joi.string().required(),
  isCorrect: Joi.boolean().required(),
  type: Joi.string(),
  questionId: Joi.number(),
})
