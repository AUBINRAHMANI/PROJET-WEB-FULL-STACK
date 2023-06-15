const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  nom: Joi.string().required(),
  prenom: Joi.string().required(),
  score: Joi.array().items(Joi.number()),
  stade: Joi.number().required(),
  droit: Joi.boolean().required(),
  image: Joi.string(),
})
