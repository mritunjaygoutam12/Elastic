const Joi = require('joi');

const bookVal = {};
bookVal.addBook = {
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    publisher: Joi.string().required(),
    publishedDate: Joi.date().required(),
    keyword: Joi.string().required(),
  },
};

bookVal.getBook = {
  body: {
    name: Joi.string().required(),
    description: Joi.string().required(),
    publisher: Joi.string().required(),
    publishedDate: Joi.date().required(),
    keyword: Joi.string().required(),
  },
};

module.exports = bookVal;
