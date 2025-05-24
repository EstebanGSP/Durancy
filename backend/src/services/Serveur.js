// src/services/Serveur.js
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
const tutorialRoutes = require('../routes/tutorialRoutes');

class Server {
  constructor(port) {
    this.port = port || 3000;
    this.app = express();
    this.setupMiddleware();
    this.setupRoutes();
  }

  setupMiddleware() {
    this.app.use(express.json());

    // Sert les fichiers statiques depuis /uploads
    this.app.use('/uploads', express.static('uploads'));

    // Page de test
    this.app.get('/', (req, res) => {
      res.send('API Durancy Melissa en ligne !');
    });

    // Swagger
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  }

  setupRoutes() {
    this.app.use('/users', userRoutes);
    this.app.use('/kits', kitRoutes);
    this.app.use('/orders', orderRoutes);
    this.app.use('/api', cartRoutes);
    this.app.use('/reviews', reviewRoutes);
    this.app.use('/faq', faqRoutes);
    this.app.use('/tutorials', tutorialRoutes);
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`🚀 Serveur lancé sur http://localhost:${this.port}`);
    });
  }
}

module.exports = Server;
