import React from "react";

const getYoutubeEmbedUrl = (url) => {
  const match = url.match(/(?:v=|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
};

const VideoSection = ({ tutorial }) => {
  const embedUrl = getYoutubeEmbedUrl(tutorial.video_url);

  return (
    <section className="p-6">
      <h1 className="text-2xl font-bold mb-2">{tutorial.title}</h1>

      <div className="flex items-center gap-2 mb-4">
        <div className="flex text-gray-300 text-xl">
          ★★★★★ {/* TODO: remplacer plus tard par une vraie note */}
        </div>
        <span className="text-gray-600">(0/5 – 0 avis)</span>
      </div>

      {embedUrl ? (
        <div className="w-full h-64 mb-4">
          <iframe
            src={embedUrl}
            title={tutorial.title}
            className="w-full h-full rounded-lg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="w-full h-64 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
          <span className="text-gray-500">Vidéo non disponible</span>
        </div>
      )}

      <div className="flex justify-between text-sm text-gray-700">
        <span>Difficulté : <strong>Facile</strong></span> {/* Placeholder */}
        <span className="text-blue-600 underline">Kit compatible n°{tutorial.kit_id}</span>
      </div>
    </section>
  );
};

export default VideoSection;
