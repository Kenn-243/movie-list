import { RouteObject } from "react-router-dom";
import App from "../pages/App";
import { SignInRouter } from "./auth/SignInRouter";
import { MovieRouter } from "./movie/MovieRouter";
import { SelectedMovieRouter } from "./movie/selected-movie/SelectedMovieRouter";

export const CombinedRouter: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [...SignInRouter, ...MovieRouter, ...SelectedMovieRouter],
  },
];
