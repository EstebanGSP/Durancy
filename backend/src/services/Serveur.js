const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('../docs/config.js'); 

// Routes
const userRoutes = require('../routes/userRoutes'); 
const kitRoutes = require('../routes/kitRoutes');
const orderRoutes = require('../routes/orderRoutes');
const cartRoutes = require('../routes/cartRoutes');
const reviewRoutes = require('../routes/reviewRoutes');
const faqRoutes = require('../routes/faqRoutes');
const tutorialRoutes = require('../routes/tutorialRoutes.js');



function startServer(port) {
  const app = express();

  // Middleware pour lire le JSON dans les requêtes
  app.use(express.json());

  // Route de test simple
  app.get('/', (req, res) => {
    res.send('API Durancy Melissa en ligne !');
  });

  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Ajout des routes principales
  app.use('/users', userRoutes);
  app.use('/kits', kitRoutes);
  app.use('/orders', orderRoutes);
  app.use('/api', cartRoutes);
  app.use('/reviews', reviewRoutes);
  app.use('/faq', faqRoutes);
  app.use('/tutorials', tutorialRoutes);


  // Lancement du serveur
  app.listen(port, () => {
    console.log(`Serveur lancé sur http://localhost:${port}`);
  });
}

module.exports = startServer;
