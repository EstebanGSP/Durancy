// src/pages/ConditionsGenerales.jsx
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function ConditionsGenerales() {
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto py-24 px-6 bg-white text-gray-800">
        <h1 className="text-3xl font-bold text-[#9B59B6] mb-6">
          Conditions Générales d’Utilisation
        </h1>

        <p className="mb-4 font-medium">Dernière mise à jour : 05/06/2025</p>

        <p className="mb-4">
          Bienvenue sur Durancy, une plateforme dédiée à la mise en relation entre professionnels et entreprises à travers la publication et la réponse à des offres d’emploi ou de missions.
        </p>
        <p className="mb-4">
          En accédant à notre site internet ou à notre application, vous acceptez pleinement et entièrement les présentes Conditions Générales d’Utilisation (ci-après les « CGU »). Si vous n’acceptez pas ces CGU, veuillez ne pas utiliser notre service.
        </p>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">1. Informations légales</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Éditeur du site : DURANCY</li>
          <li>Responsable de publication : Gaspar Esteban</li>
          <li>Hébergement : NOC</li>
          <li>Contact : contact@durancy.fr</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">2. Objet du service</h2>
        <p className="mb-2">Durancy est une plateforme en ligne qui permet :</p>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Aux entreprises de créer un compte, publier des offres, et gérer les candidatures.</li>
          <li>Aux particuliers (candidats) de créer un profil, rechercher des offres, postuler, et gérer leurs candidatures.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">3. Conditions d’inscription</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>L’utilisateur s’engage à fournir des informations exactes, complètes et à jour.</li>
          <li>Il est interdit de créer un compte usurpant l’identité d’un tiers.</li>
          <li>L’accès à certaines fonctionnalités nécessite une authentification par email ou via Google/LinkedIn (via NextAuth).</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">4. Comportement attendu des utilisateurs</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Ne pas publier de contenu illégal, diffamatoire, injurieux, haineux ou discriminatoire.</li>
          <li>Respecter la confidentialité des informations échangées via la plateforme.</li>
          <li>Utiliser la plateforme uniquement dans le cadre légal d’une recherche ou publication d’offre professionnelle.</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">5. Propriété intellectuelle</h2>
        <p className="mb-4">
          Le contenu du site (logos, textes, images, code) est protégé par les droits de propriété intellectuelle et appartient à Durancy ou ses partenaires. Toute reproduction, distribution ou exploitation sans autorisation est strictement interdite.
        </p>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">6. Responsabilités</h2>
        <p className="mb-4">
          Durancy met tout en œuvre pour assurer un service sécurisé et fonctionnel, mais ne peut être tenu responsable des interruptions, erreurs ou pertes de données liées à des événements hors de son contrôle (ex. : pannes serveur, force majeure). Durancy ne garantit pas l’aboutissement d’une candidature ou le sérieux des offres publiées.
        </p>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">7. Données personnelles</h2>
        <p className="mb-4">
          Les données personnelles collectées sont traitées conformément à la Politique de Confidentialité (voir section dédiée). Vous pouvez à tout moment demander la suppression de vos données en nous contactant à <a href="mailto:contact@durancy.fr" className="text-[#9B59B6] underline">contact@durancy.fr</a>.
        </p>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">8. Sécurité</h2>
        <ul className="list-disc list-inside mb-4 space-y-1">
          <li>Authentification sécurisée via NextAuth (avec support Google/LinkedIn)</li>
          <li>Hachage des mots de passe avec bcrypt</li>
          <li>Vérification des fichiers uploadés (formats .pdf, .png, .jpg uniquement)</li>
          <li>Utilisation d’ORM sécurisé (Prisma) pour éviter toute injection SQL</li>
        </ul>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">9. Résiliation de compte</h2>
        <p className="mb-4">
          L’utilisateur peut à tout moment demander la suppression de son compte. Durancy se réserve également le droit de suspendre ou supprimer un compte en cas de non-respect des CGU.
        </p>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">10. Modifications des CGU</h2>
        <p className="mb-4">
          Durancy se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés via le site ou par email.
        </p>

        <h2 className="text-xl font-semibold text-[#9B59B6] mt-10 mb-2">11. Droit applicable</h2>
        <p className="mb-4">
          Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux compétents seront ceux du ressort du siège social de Durancy.
        </p>
      </main>
      <Footer />
    </>
  );
}
