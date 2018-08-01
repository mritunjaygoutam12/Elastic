const app = require('./app');

const port = process.env.PORT || 3000;
const ip = process.env.IP || '127.0.0.1';
app.listen(port, ip, (err) => {
  if (err) throw err;
  else console.info(`Server is running at http://${ip}:${port}`);
});
