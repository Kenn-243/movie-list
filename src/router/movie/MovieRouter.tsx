import { RouteObject } from "react-router-dom";
import MoviePage from "../../pages/movie/MoviePage";

export const MovieRouter: RouteObject[] = [
  {
    path: "/",
    element: <MoviePage />,
  },
];
