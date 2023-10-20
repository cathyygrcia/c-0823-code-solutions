import express from 'express';

const app = express();

app.use((req, res) => {
  console.log('HTTP Request Method: ', req.method);
  res.send('Hello, World!');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
