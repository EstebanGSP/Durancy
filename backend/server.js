const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Bienvenue sur l’API de Durancy !');
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
