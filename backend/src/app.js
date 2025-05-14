const { connectDatabase } = require('./services/ConnexionDB');
const Server = require('./services/Serveur');
const createTables = require('./services/InitDatabase');
const AssociationManager = require('./models/associations');

async function main() {
  try {
    await connectDatabase();
    AssociationManager.setup();
    await createTables();

    const server = new Server(3000); // ✅ instanciation correcte
    server.start(); // ✅ démarre le serveur
  } catch (error) {
    console.error("Erreur lors du démarrage de l'application :", error);
  }
}

main();
