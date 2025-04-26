export default function RecentTutorials() {
    return (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Tutoriels récents</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tu pourras intégrer les miniatures YouTube ici */}
            <div className="border p-4 rounded-lg">Tutoriel 1</div>
            <div className="border p-4 rounded-lg">Tutoriel 2</div>
            <div className="border p-4 rounded-lg">Tutoriel 3</div>
          </div>
        </div>
      </section>
    );
  }
  