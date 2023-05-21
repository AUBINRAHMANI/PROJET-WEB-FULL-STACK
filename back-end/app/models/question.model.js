const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')
const { Answer } = require('./index')

module.exports = new BaseModel('Question', {
  id: Joi.string().required(),
  label: Joi.string().required(),
  answers: Joi.array().items(Answer),
  selectedAnswerIndex: Joi.number(),
})
