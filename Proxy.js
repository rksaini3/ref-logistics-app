const express = require('express');
const app = express();
app.use(express.json());

app.use('/', (req, res) => {
  req.pipe(
    require('http').request({
      hostname: 'localhost',
      port: 3002,
      path: '/api/client' + req.url,
      method: req.method,
      headers: req.headers
    }, (r) => r.pipe(res))
  );
});

app.listen(80);
