import { RouteObject } from "react-router-dom";
import FavoritesPage from "../../../pages/collection/favorites/FavoritesPage";

export const FavoritesRouter: RouteObject[] = [
  {
    path: "/collection/favorites",
    element: <FavoritesPage />,
  },
];
