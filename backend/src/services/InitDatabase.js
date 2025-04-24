const User = require('../models/User');
const Kit = require('../models/Kit');

async function initDatabase() {
  try {
    await User.sync();
    await Kit.sync(); 
    console.log('✅ Tables synchronisées avec succès');
  } catch (error) {
    console.error('❌ Erreur lors de la synchronisation des tables :', error);
  }
}

module.exports = initDatabase;
