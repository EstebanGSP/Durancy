const express = require('express');

// Routes
const userRoutes = require('../routes/userRoutes'); 
const kitRoutes = require('../routes/kitRoutes');
const orderRoutes = require('../routes/orderRoutes');

function startServer(port) {
  const app = express();

  // Middleware pour lire le JSON dans les requêtes
  app.use(express.json());

  // Route de test simple
  app.get('/', (req, res) => {
    res.send('🎉 API Durancy en ligne !');
  });

  // Ajout des routes principales
  app.use('/users', userRoutes);
  app.use('/kits', kitRoutes);
  app.use('/orders', orderRoutes);
  
  // 🚀 Lancement du serveur
  app.listen(port, () => {
    console.log(`✅ Serveur lancé sur http://localhost:${port}`);
  });
}

module.exports = startServer;
