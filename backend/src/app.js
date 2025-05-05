const { connectDatabase } = require('./services/ConnexionDB');
const startServer = require('./services/Serveur');
const createTables = require('./services/InitDatabase');
const setupAssociations = require('./models/associations');

async function main() {
  try {
    await connectDatabase();
    setupAssociations();
    await createTables();
    startServer(3000);
  } catch (error) {
    console.error("Erreur lors du démarrage de l'application :", error);
  }
}

main();