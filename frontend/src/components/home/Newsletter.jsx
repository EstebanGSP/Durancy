export default function Newsletter() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informés</h2>
          <p className="mb-6">Inscrivez-vous à notre newsletter</p>
          <div className="flex justify-center">
            <input 
              type="email" 
              placeholder="Votre email" 
              className="p-2 rounded-l-lg border"
            />
            <button className="p-2 bg-purple-600 text-white rounded-r-lg">
              Je m'inscris
            </button>
          </div>
        </div>
      </section>
    );
  }
  