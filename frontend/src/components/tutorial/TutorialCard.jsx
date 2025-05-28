import { Link } from "react-router-dom";

const TutorialCard = ({ tutorial }) => {
  return (
    <Link to={`/tutoriels/${tutorial.id}`} className="block bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition">
      <img src={tutorial.thumbnailUrl} alt={tutorial.title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{tutorial.title}</h3>
        <p className="text-sm text-gray-600">{tutorial.description?.slice(0, 80)}...</p>
      </div>
    </Link>
  );
};

export default TutorialCard;
