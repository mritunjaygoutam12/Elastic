const express = require('express');
const validitate = require('express-validation');
const bookController = require('./bookController');
const validator = require('./bookValiditation');

const router = express.Router();
// console.log(validator);

router.post('/add-book', validitate(validator.addBook), (req, res) => {
  console.log(req.body, 'data hai');
  bookController.addBook(req.body).then((data) => {
    console.log(data);
    res.send(data);
  }).catch((err) => {
    throw err;
  });
});

router.post('/get-book', validitate(validator.getBook), (req, res) => {
  console.log(req.body, 'data hai');
  bookController.getAllBook(req.body).then((data) => {
    console.log(data);
    res.send(data);
  }).catch((err) => {
    throw err;
  });
});

module.exports = router;
