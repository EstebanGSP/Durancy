<<<<<<< HEAD
const connectDatabase = require('./services/ConnexionDB');
const startServer = require('./services/Serveur');

async function main() {
  try {
    await connectDatabase();
    startServer(3030);
  } catch (error) {
    console.error("❌ Erreur au démarrage :", error);
  }
}

main();
=======
const connectDatabase = require('./services/ConnexionDB');
const startServer = require('./services/Serveur');

async function main() {
  try {
    await connectDatabase();
    startServer(3030);
  } catch (error) {
    console.error("❌ Erreur au démarrage :", error);
  }
}

main();
>>>>>>> 21b6889 (landing page terminado)
