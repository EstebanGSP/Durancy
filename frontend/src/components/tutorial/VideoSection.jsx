import React from "react";

const VideoSection = () => {
  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-2">Titre de la vidéo</h1>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-yellow-500 text-xl">
          ★★★★☆
        </div>
        <span className="text-gray-600">(4.5/5 – 126 avis)</span>
      </div>
      <div className="w-full h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
        <span className="text-gray-500">Vidéo Placeholder</span>
      </div>
      <div className="flex justify-between text-sm text-gray-700">
        <span>Difficulté : <strong>Facile</strong></span>
        <a href="#" className="text-blue-600 underline">Kit compatible</a>
      </div>
    </section>
  );
};

export default VideoSection;
