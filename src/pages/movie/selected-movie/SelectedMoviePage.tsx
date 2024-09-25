import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useEffect, useState } from "react";
import ErrorPopup from "../../../components/ErrorPopup";
import Loading from "../../../components/Loading";
import ReviewCard from "../../../components/ReviewCard";
import { ReviewModel } from "../../../models/ReviewModel";
import { fetchReviews } from "../../../reducers/movie/movieSlicer";

function SelectedMoviePage() {
  const { movie, reviews, isError, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.movie
  );
  const dispatch = useDispatch();
  const [reviewPage, setReviewPage] = useState(1);

  function handleReviewPageChange(page: number) {
    setReviewPage(page);
  }

  useEffect(() => {
    if (isError) {
      ErrorPopup(errorMessage);
    }
  }, [isError]);

  useEffect(() => {
    if (movie?.id) {
      dispatch(fetchReviews({ movieId: movie.id, page: reviewPage }));
    }
  }, [reviewPage, movie?.id]);

  return (
    <div>
      <Loading isLoading={isLoading} />
      <div className="flex flex-col md:flex-row items-start md:items-center m-6 p-6 rounded-lg shadow-lg">
        <img
          className="w-full md:w-1/3 rounded-lg object-cover"
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={movie?.title}
        />
        <div className="md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{movie?.title}</h1>
          <p className="text-gray-600 italic text-sm">
            Release Date: {movie?.release_date}
          </p>

          <div className="mt-3">
            <h2 className="text-lg font-semibold text-gray-800">Genres</h2>
            <ul className="flex flex-wrap gap-2 mt-1">
              {movie?.genres?.map((genre) => (
                <li
                  key={genre.id}
                  className="bg-blue-200 text-blue-900 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Overview</h2>
            <p className="text-gray-700 mt-2">{movie?.overview}</p>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Language:</span>{" "}
              {movie?.original_language.toUpperCase()}
            </div>
            <div className="text-sm text-gray-600">
              <span className="font-medium">Popularity:</span>{" "}
              {movie?.popularity}
            </div>
          </div>

          <div className="flex items-center mt-4">
            <span className="text-yellow-500 text-lg">★</span>
            <span className="ml-1 text-gray-700 font-bold">
              {movie?.vote_average}
            </span>
            <span className="ml-2 text-sm text-gray-500">
              ({movie?.vote_count} votes)
            </span>
          </div>
        </div>
      </div>
      <div>
        <div className="flex px-6 justify-between">
          <h1 className="mt-1 font-bold text-2xl">Reviews</h1>
          <div className="join">
            <button
              onClick={() => handleReviewPageChange(1)}
              className={`join-item btn ${reviewPage == 1 ? "btn-active" : ""}`}
            >
              1
            </button>
            <button
              onClick={() => handleReviewPageChange(2)}
              className={`join-item btn ${reviewPage == 2 ? "btn-active" : ""}`}
            >
              2
            </button>
            <button
              onClick={() => handleReviewPageChange(3)}
              className={`join-item btn ${reviewPage == 3 ? "btn-active" : ""}`}
            >
              3
            </button>
            <button
              onClick={() => handleReviewPageChange(4)}
              className={`join-item btn ${reviewPage == 4 ? "btn-active" : ""}`}
            >
              4
            </button>
            <button
              onClick={() => handleReviewPageChange(5)}
              className={`join-item btn ${reviewPage == 5 ? "btn-active" : ""}`}
            >
              5
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        {reviews.length > 0 ? (
          reviews.map((review: ReviewModel) => {
            return (
              <ReviewCard
                key={review.id}
                id={review.id}
                avatarPath={review.author.avatar_path}
                authorName={review.author.name}
                authorUsername={review.author.username}
                authorRating={review.author.rating}
                content={review.content}
                created_at={review.created_at}
              />
            );
          })
        ) : (
          <h1 className="flex justify-center items-center font-medium h-[200px]">
            There are no Reviews
          </h1>
        )}
      </div>
    </div>
  );
}

export default SelectedMoviePage;
