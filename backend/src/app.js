const { connectDatabase } = require('./services/ConnexionDB');
const startServer = require('./services/Serveur');
const createTables = require('./services/InitDatabase'); // ← très important

async function main() {
  try {
    await connectDatabase();
    await createTables(); // ← OBLIGATOIRE pour créer les tables
    startServer(3030);
  } catch (error) {
    console.error("❌ Erreur au démarrage :", error);
  }
}

main();
