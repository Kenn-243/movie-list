import { Link } from "react-router-dom";
import { fetchMovieDetails } from "../reducers/movie/movieSlicer";
import { useDispatch } from "react-redux";

function MovieCard({ id, imageUrl, title }: any) {
  const dispatch = useDispatch();

  function handleMovieDetails() {
    dispatch(fetchMovieDetails(id));
  }

  return (
    <Link
      onClick={handleMovieDetails}
      to="/movie"
      className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md overflow-hidden transition transform hover:bg-blue-100 hover:border-blue-500 hover:shadow-lg hover:scale-105 cursor-pointer"
    >
      <img
        className="w-full h-[400px] object-cover"
        src={imageUrl}
        alt={title}
      />
      <div className="p-4">
        <h1 className="text-xl text-center font-semibold text-gray-900">
          {title}
        </h1>
      </div>
    </Link>
  );
}

export default MovieCard;
