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

        {/* Boutons de rôle */}
        <div className="mb-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <button
            className={`px-10 py-2 w-full md:w-auto
              ${role === 'Particulier'
                ? 'bg-[#9B59B6] text-white rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none'
                : 'bg-transparent border-[2.5px] border-white text-white rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none'
              }`}
            onClick={() => setRole('Particulier')}
          >
            Particulier
          </button>
          <button
            className={`px-10 py-2 w-full md:w-auto
              ${role === 'Professionnel'
                ? 'bg-[#9B59B6] text-white rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none'
                : 'bg-transparent border-[2.5px] text-white rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none'
              }`}
            onClick={() => setRole('Professionnel')}
          >
            Professionnel
          </button>
        </div>


        {/* Formulaire */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {["Nom:", "Prénom:", "Email:", "Mobile:"].map((placeholder, idx) => (
              <input
                key={idx}
                type="text"
                placeholder={placeholder}
                className="p-3 w-full bg-transparent border-[2.5px] border-white text-white placeholder-white 
                  rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none
                  transition-all duration-300 
                  focus:outline-none focus:border-[#9B59B6] focus:placeholder-transparent"
              />
            ))}
          </div>

          <textarea
            placeholder="Votre message :"
            rows="4"
            className="p-3 w-full bg-transparent border-[2.5px] border-white text-white placeholder-white 
              rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none
              transition-all duration-300 
              focus:outline-none focus:border-[#9B59B6] focus:placeholder-transparent"
          />

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-gradient-to-r from-violetStart to-violetEnd text-white px-20 py-2 
                rounded-tr-lg rounded-br-lg rounded-bl-lg rounded-tl-none hover:opacity-90 transition"
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
