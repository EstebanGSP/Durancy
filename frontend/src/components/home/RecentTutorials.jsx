export default function RecentTutorials() {
  const tutorials = [
    {
      id: 1,
      title: "Remplacer l’écran de votre iPhone 12 facilement",
      url: "https://www.youtube.com/watch?v=5_VnSRx1Se8&pp=ygUacmVtcGxhY2VyIMOpY3JhbiBpcGhvbmUgMTE%3D",
    },
    {
      id: 2,
      title: "Réparer un lave-linge Bosch en 30 minutes",
      url: "https://www.youtube.com/watch?v=xxxxx2",
    },
    {
      id: 3,
      title: "Changer la batterie d’un MacBook Pro soi-même",
      url: "https://www.youtube.com/watch?v=xxxxx3",
    },
    {
      id: 4,
      title: "Rafraîchir votre aspirateur Dyson sans outils pro",
      url: "https://www.youtube.com/watch?v=xxxxx4",
    },
  ];

  return (
    <section className="w-full py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-10">Tutoriels récents</h2>

        {/* Grid des cartes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {tutorials.map((tutorial) => (
            <a
              key={tutorial.id}
              href={tutorial.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow rounded-lg overflow-hidden transition-transform hover:scale-105 hover:shadow-lg"
            >
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                <img
                  src="/images/youtubered.png"
                  alt="Youtube preview"
                  className="h-12 w-16"
                />
              </div>
              <div className="p-4 text-sm font-medium text-black">
                {tutorial.title}
              </div>
            </a>
          ))}
        </div>

        {/* Bouton */}
        <div className="flex justify-end mt-10">
          <a
            href="https://www.youtube.com/@Durancy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#9B59B6] text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 transition"
          >
            Voir tous les tutoriels
          </a>
        </div>
      </div>
    </section>
  );
}
