const HeroSection = () => {
    return (
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Durancy arrive pour réparer vos équipements
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Durable, éthique et au moindre coût !
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition">
                Tutoriels
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-purple-50 transition">
                Réparation
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img
              src="/images/hero-illustration.png"
              alt="Illustration réparation"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  