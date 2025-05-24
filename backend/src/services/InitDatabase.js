const { sequelize } = require('./ConnexionDB');

// 🔄 Import des modèles Sequelize
require('../models/User');
require('../models/Partner');      
require('../models/Kit');
require('../models/Order');
require('../models/OrderKit');
require('../models/Review');
require('../models/Faq');
require('../models/Tutorial');
require('../models/Cart');


let tablesAlreadySynced = false;

/**
 * Fonction who creat mes tables 
 */
async function createTables() {
  if (tablesAlreadySynced) return;
  try {
    await sequelize.sync();
    tablesAlreadySynced = true;
    console.log('Tables synchronisées avec succès');
  } catch (error) {
    console.error('Erreur lors de la création des tables :', error);
  }
}

module.exports = createTables;