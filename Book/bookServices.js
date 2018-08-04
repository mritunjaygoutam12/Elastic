
const request = require('request');
const elasticsearch = require('elasticsearch');

const client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace',
});
const book = require('./book');

const bookServices = {};

bookServices.addBook = bookDetails => new Promise((resolve, reject) => {
  // console.log(book, 'data Base pring HHHHHHHHHHHHHHH');
  book.create(bookDetails, (err, books) => {
    if (err) {
      console.log(`${err} This error is in bookServices.addBook`);
      reject(err);
    } else {
      resolve(books);
    }
  });
});

bookServices.getAllBook = bookDetails => new Promise((resolve, reject) => {
  // console.log(book, 'data Base pring HHHHHHHHHHHHHHH');
  book.find({}, (err, books) => {
    if (err) {
      console.log(`${err} This error is in bookServices.addBook`);
      reject(err);
    } else {
      resolve(books);
    }
  });
});

bookServices.matchedBook = string => new Promise((resolve, reject) => {
  client.search({
    q: string.data,
  }).then((body) => {
    const hits = body.hits.hits;
    resolve(hits);
  }, (error) => {
    console.trace(error.message);
    reject(error);
  });
});

bookServices.filterBook = filterData => new Promise((resolve, reject) => {
  client.search({
    index: 'bookss',
    type: 'books',
    body: {
      query: {
        bool: {
          must: [
            filterData,
          ],
          filter: [
            // { term: { publisher: '' } },
          ],
        },
      },
    },
  }).then((body) => {
    const hits = body.hits.hits;
    resolve(hits);
  }, (error) => {
    console.trace(error.message);
    reject(error);
  });
});

module.exports = bookServices;
