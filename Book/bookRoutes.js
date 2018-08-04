const express = require('express');
const validitate = require('express-validation');
const bookController = require('./bookController');
const validator = require('./bookValiditation');

const router = express.Router();
// console.log(validator);

router.post('/add-book', validitate(validator.addBook), (req, res) => {
  bookController.addBook(req.body).then((data) => {
    console.log(data);
    res.send(data);
  }).catch((err) => {
    throw err;
  });
});

router.get('/get-book', (req, res) => {
  bookController.getAllBook(req.body).then((data) => {
    console.log(data);
    res.send(data);
  }).catch((err) => {
    throw err;
  });
});

router.post('/matched-book', (req, res) => {
  bookController.matchedBook(req.body).then((data) => {
    res.send(data);
  }).catch((err) => {
    throw err;
  });
});

router.post('/filter-book', (req, res) => {
  bookController.filterBook(req.body).then((data) => {
    console.log(data);
    res.send(data);
  }).catch((err) => {
    throw err;
  });
});

module.exports = router;
