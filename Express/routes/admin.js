const express = require('express');

const router = express.Router();

router.get('/product/add', (req, res, next) => {
  res.send(
    `<form action="/api/product/add" method="POST">
            <label for="title">Title</label>
            <input type="text" name="title">
            <label for="price">Price</label>
            <input type="number" name="price">
            <button type="submit">Add Product</button>
          </form>`
  );
});

module.exports = router;
