import { RouteObject } from "react-router-dom";
import WatchlistPage from "../../../pages/collection/watchlist/WatchlistPage";

export const WatchListRouter: RouteObject[] = [
  {
    path: "/collection/watchlist",
    element: <WatchlistPage />,
  },
];
