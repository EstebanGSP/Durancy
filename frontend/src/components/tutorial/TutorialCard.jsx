import { Link } from "react-router-dom";

const getYoutubeThumbnail = (url) => {
  const match = url.match(/(?:v=|\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
};

const TutorialCard = ({ tutorial }) => {
  const thumbnail = getYoutubeThumbnail(tutorial.video_url);

  return (
    <Link to={`/tutoriels/${tutorial.id}`} className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
      {thumbnail && (
        <img
          src={thumbnail}
          alt={tutorial.title}
          className="w-full h-40 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{tutorial.title}</h3>
        <p className="text-sm text-gray-600">
          {tutorial.description?.slice(0, 80)}...
        </p>
      </div>
    </Link>
  );
};

export default TutorialCard;
