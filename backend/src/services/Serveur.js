<<<<<<< HEAD
const express = require('express');

function startServer(port) {
  const app = express();

  // Middleware pour lire le JSON
  app.use(express.json());

  // Route test
  app.get('/', (req, res) => {
    res.send('Bienvenue sur l’API Durancy 🚀');
  });

  // Lancement du serveur
  app.listen(port, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${port}`);
  });
}

module.exports = startServer;
=======
const express = require('express');

function startServer(port) {
  const app = express();

  // Middleware pour lire le JSON
  app.use(express.json());

  // Route test
  app.get('/', (req, res) => {
    res.send('Bienvenue sur l’API Durancy 🚀');
  });

  // Lancement du serveur
  app.listen(port, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${port}`);
  });
}

module.exports = startServer;
>>>>>>> 21b6889 (landing page terminado)
