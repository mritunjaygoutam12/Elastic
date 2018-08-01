const mongoose = require('mongoose');

const dburi = 'mongodb://127.0.0.1/book';
mongoose.connect(dburi, (err) => {
  if (err) throw err;
});

mongoose.connection.on('connected', () => {
  console.info('moongodb connected successfully');
});

mongoose.connection.on('disconnected', () => {
  console.warn('moongodb disconnected');
});

mongoose.connection.on('error', () => {
  console.error('Error while connecting to mongodb');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    throw new Error('Mongodb closed successfully due to app termination');
  });
});
