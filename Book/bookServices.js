
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

module.exports = bookServices;
