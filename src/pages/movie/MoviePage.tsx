import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import MovieCard from "../../components/MovieCard";
import {
  fetchNowPlaying,
  fetchPopular,
  fetchTopRated,
} from "../../reducers/movie/movieSlicer";
import Loading from "../../components/Loading";
import ErrorPopup from "../../components/ErrorPopup";
import SuccessPopup from "../../components/SuccessPopup";
import { falsifyUserSuccess } from "../../reducers/user/userSlicer";

function MoviePage() {
  const { movies, isError, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.movie
  );
  const { isSuccessful } = useSelector((state: RootState) => state.user);
  const [activeTab, setActiveTab] = useState("Now Playing");
  const [paging, setPaging] = useState(1);
  const dispatch = useDispatch();

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const handlePaging = (pagingNumber: number) => {
    setPaging(pagingNumber);
  };

  useEffect(() => {
    if (activeTab == "Now Playing") {
      dispatch(fetchNowPlaying(paging));
    } else if (activeTab == "Popular") {
      dispatch(fetchPopular(paging));
    } else if (activeTab == "Top Rated") {
      dispatch(fetchTopRated(paging));
    }
  }, [paging, activeTab]);

  useEffect(() => {
    if (isError) {
      ErrorPopup(errorMessage);
    }
  }, [isError]);

  useEffect(() => {
    if (isSuccessful) {
      SuccessPopup();
      dispatch(falsifyUserSuccess());
    }
  }, [isSuccessful, dispatch]);

  return (
    <div>
      <Loading isLoading={isLoading} />
      <div role="tablist" className="tabs tabs-boxed bg-white">
        <a
          role="tab"
          className={`btn btn-ghost bg-gray-200 tab ${
            activeTab === "Now Playing" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("Now Playing")}
        >
          Now Playing
        </a>
        <a
          role="tab"
          className={`btn btn-ghost bg-gray-200 tab ${
            activeTab === "Popular" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("Popular")}
        >
          Popular
        </a>
        <a
          role="tab"
          className={`btn btn-ghost tab bg-gray-200 ${
            activeTab === "Top Rated" ? "tab-active" : ""
          }`}
          onClick={() => handleTabClick("Top Rated")}
        >
          Top Rated
        </a>
      </div>
      <div className="join mt-5 mr-5 flex justify-end">
        <button
          onClick={() => handlePaging(1)}
          className={`join-item btn ${paging == 1 ? "btn-active" : ""}`}
        >
          1
        </button>
        <button
          onClick={() => handlePaging(2)}
          className={`join-item btn ${paging == 2 ? "btn-active" : ""}`}
        >
          2
        </button>
        <button
          onClick={() => handlePaging(3)}
          className={`join-item btn ${paging == 3 ? "btn-active" : ""}`}
        >
          3
        </button>
        <button
          onClick={() => handlePaging(4)}
          className={`join-item btn ${paging == 4 ? "btn-active" : ""}`}
        >
          4
        </button>
        <button
          onClick={() => handlePaging(5)}
          className={`join-item btn ${paging == 5 ? "btn-active" : ""}`}
        >
          5
        </button>
      </div>
      <div
        style={{ height: `calc(100vh - 200px)` }}
        className="mt-3 overflow-y-scroll p-4"
      >
        <div className="grid grid-cols-3 gap-4">
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.movieId}
                id={movie.movieId}
                imageUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                title={movie.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MoviePage;
