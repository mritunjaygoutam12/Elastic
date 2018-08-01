const mongoose = require('mongoose');
const mongoosastic = require('mongoosastic');

// const Schema = new mongoose.Schema();

const bookSchema = new mongoose.Schema({
  name: { type: String, es_indexed: true },
  description: { type: String, es_indexed: true },
  publisher: { type: String, es_indexed: true },
  publishedDate: { type: Date, es_indexed: true },
  keyword: { type: String, es_indexed: true },
});

bookSchema.plugin(mongoosastic, {
  host: 'localhost',
  port: 9200,
});

module.exports = mongoose.model('books', bookSchema);
