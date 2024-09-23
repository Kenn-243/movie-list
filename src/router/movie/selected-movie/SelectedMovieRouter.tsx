import { RouteObject } from "react-router-dom";
import SelectedMoviePage from "../../../pages/movie/selected-movie/SelectedMoviePage";

export const SelectedMovieRouter: RouteObject[] = [
  {
    path: "/movie",
    element: <SelectedMoviePage />,
  },
];
