const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../util/path');

router.get('/static', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'static.html'));
});

router.get('/', (req, res, next) => {
  res.send(`
          <head>
              <link rel="stylesheet" href="/css/main.css">
          </head>
          <body>
            <h1>Hello from Express!</h1>
            <h2>Dynamic</h2>
            <img src="/images/example.png" class="img-main">
            <a href="/static">Static version</a>
          </body>
  `);
});

module.exports = router;
