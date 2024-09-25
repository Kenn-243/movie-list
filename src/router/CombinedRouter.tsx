import { RouteObject } from "react-router-dom";
import App from "../pages/App";
import { SignInRouter } from "./auth/SignInRouter";
import { MovieRouter } from "./movie/MovieRouter";
import { SelectedMovieRouter } from "./movie/selected-movie/SelectedMovieRouter";
import { FavoritesRouter } from "./collection/favorites/FavoritesRouter";
import { WatchListRouter } from "./collection/watchlist/WatchlistRouter";

export const CombinedRouter: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      ...SignInRouter,
      ...MovieRouter,
      ...SelectedMovieRouter,
      ...FavoritesRouter,
      ...WatchListRouter,
    ],
  },
];
