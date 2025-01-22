const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send({ error: 'Tiedostoa ei voitu lukea.' });
    }
    res.json(JSON.parse(data));
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Palvelin käynnistetty portissa ${PORT}`));
