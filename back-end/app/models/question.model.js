const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Question', {
  id: Joi.string().required(),
  label: Joi.string().required(),
  answers: Joi.array(),
  selectedAnswerIndex: Joi.number(),
  quizId: Joi.number(),
})
