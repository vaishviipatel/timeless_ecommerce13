const express = require('express');
const cors = require('cors');
const connection = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => {
  const category = req.query.category;
  const isFeatured = req.query.featured;
  const isNew = req.query.new;
  let query = 'SELECT * FROM products';
  let params = [];
  if (category) {
    query += ' WHERE category = ?';
    params.push(category);
  } else if (isFeatured) {
    query += ' WHERE is_featured = 1';
  } else if (isNew) {
    query += ' WHERE is_new = 1';
  }
  connection.query(query, params, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

