import { Link } from "react-router-dom";
import { cardDetails } from "../cardData";

export function Template({ focusedId, title, description, image }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center text-white max-w-2xl bg-black/30 p-4 rounded-lg">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </div>
      <div className="flex flex-row gap-4 w-full h-40 items-center p-4">
        {Object.entries(cardDetails).map(([id, detail]) => (
          <Link
            key={id}
            to={`/${id}`}
            className={`flex-grow h-full bg-white rounded-lg flex items-center justify-center text-2xl font-bold ${id === focusedId ? "shadow-lg shadow-gray-500" : ""
              }`}
          >
            {detail.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Template;
