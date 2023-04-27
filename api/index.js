const express = require('express');
const app = express();
const cors = require('cors');
const multer = require('multer');
const upload = multer();
require('dotenv').config();

app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const { originalname: name, mimetype: type, size } = req.file;
  res.json({
    name,
    type,
    size,
  });
});

module.exports = app;
