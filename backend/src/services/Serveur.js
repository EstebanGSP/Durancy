const express = require('express');

const userRoutes = require('../routes/userRoutes');
const kitRoutes = require('../routes/kitRoutes');
const orderRoutes = require('../routes/orderRoutes');
const reviewRoutes = require('../routes/reviewRoutes');
const faqRoutes = require('../routes/faqRoutes');

function startServer(port) {
  const app = express();

  app.use(express.json());

  // 🔗 Toutes les routes API
  app.use('/api', userRoutes);
  app.use('/api', kitRoutes);
  app.use('/api', orderRoutes);
  app.use('/api', reviewRoutes);
  app.use('/api', faqRoutes);

  // Route test
  app.get('/', (req, res) => {
    res.send('Bienvenue sur l’API Durancy 🚀');
  });

  app.listen(port, () => {
    console.log(`✅ Serveur démarré sur http://localhost:${port}`);
  });
}

module.exports = startServer;
