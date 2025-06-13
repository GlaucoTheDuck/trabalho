// server.js alternativo
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Ler dados do db.json
const readData = () => {
  try {
    const data = fs.readFileSync('db.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { items: [] };
  }
};

// Salvar dados no db.json
const writeData = (data) => {
  fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
};

// GET /api/items
app.get('/api/items', (req, res) => {
  const data = readData();
  res.json(data.items);
});

// POST /api/items
app.post('/api/items', (req, res) => {
  const data = readData();
  const newItem = { id: Date.now(), ...req.body };
  data.items.push(newItem);
  writeData(data);
  res.json(newItem);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});