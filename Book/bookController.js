const bookServices = require('./bookServices');

const bookController = {};

bookController.addBook = bookDetails => new Promise((resolve, reject) => {
  if (!bookDetails) {
    console.error('Error in addBook controller');
    reject(new Error('Error in addBook Controller'));
  } else {
    bookServices.addBook(bookDetails).then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err);
    });
  }
});

bookController.getAllBook = bookDetails => new Promise((resolve, reject) => {
  if (!bookDetails) {
    console.error('Error in addBook controller');
    reject(new Error('Error in addBook Controller'));
  } else {
    bookServices.getAllBook(bookDetails).then((result) => {
      resolve(result);
    }).catch((err) => {
      reject(err);
    });
  }
});

bookController.matchedBook = string => new Promise((resolve, reject) => {
  bookServices.matchedBook(string).then((data) => {
    resolve(data);
  });
});

bookController.filterBook = filterData => new Promise((resolve, reject) => {
  bookServices.filterBook(filterData).then((data) => {
    resolve(data);
  });
});

console.log(bookServices);
module.exports = bookController;
