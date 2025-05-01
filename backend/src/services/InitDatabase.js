const { sequelize } = require('./ConnexionDB');

require('../models/User');
require('../models/Kit');
require('../models/Order');
require('../models/OrderKit');
require('../models/Review');
require('../models/Tutorial');
require('../models/Faq');

let tablesAlreadySynced = false; 
async function createTables() {
  if (tablesAlreadySynced) return; 
  try {
    await sequelize.sync(); 
    tablesAlreadySynced = true;
  } catch (error) {
    console.error('❌ Erreur lors de la création des tables :', error);
  }
}

module.exports = createTables;
