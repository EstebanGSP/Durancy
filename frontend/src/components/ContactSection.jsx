import { useState } from 'react';

const ContactSection = () => {
  const [role, setRole] = useState('Particulier');

  return (
    <section
      className="text-white py-20 bg-no-repeat"
      style={{
        backgroundImage: "url('/images/rectangle-footer.png')",
        backgroundSize: '100% 100%',
        backgroundPosition: 'top',
      }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          Vous voulez en savoir plus ? Écrivez-nous !
        </h2>
        <p className="text-gray-300 mb-8">Nous répondons sous 48h</p>

        <div className="mb-8 flex justify-center space-x-4">
          <button
            className={`px-6 py-2 rounded ${
              role === 'Particulier'
                ? 'bg-white text-black'
                : 'bg-transparent border border-white text-white'
            }`}
            onClick={() => setRole('Particulier')}
          >
            Particulier
          </button>
          <button
            className={`px-6 py-2 rounded ${
              role === 'Professionnel'
                ? 'bg-white text-black'
                : 'bg-transparent border border-white text-white'
            }`}
            onClick={() => setRole('Professionnel')}
          >
            Professionnel
          </button>
        </div>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Nom:"
              className="p-3 rounded border w-full bg-transparent border-white text-white placeholder-white"
            />
            <input
              type="text"
              placeholder="Prénom:"
              className="p-3 rounded border w-full bg-transparent border-white text-white placeholder-white"
            />
            <input
              type="email"
              placeholder="Email:"
              className="p-3 rounded border w-full bg-transparent border-white text-white placeholder-white"
            />
            <input
              type="tel"
              placeholder="Mobile:"
              className="p-3 rounded border w-full bg-transparent border-white text-white placeholder-white"
            />
          </div>

          <textarea
            placeholder="Votre message :"
            rows="4"
            className="w-full p-3 border border-white rounded bg-transparent text-white placeholder-white"
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-3 rounded hover:opacity-90 transition"
            >
              Envoyez votre message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
