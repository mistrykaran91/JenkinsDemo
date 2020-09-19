const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hey there!');
});

app.listen(9000, () => {
  console.log('Listening on 9000');
});
