const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Utilisateur', {
  // id: Joi.string().required(),
  nom: Joi.string().required(),
  prenom: Joi.string().required(),
  score: Joi.array().items(Joi.number()),
  stade: Joi.number().required(),
  image: Joi.string(),
})
