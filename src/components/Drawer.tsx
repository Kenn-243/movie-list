import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";

function Drawer() {
  const { loggedUser } = useSelector((state: RootState) => state.user);

  return (
    <div className="lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        {loggedUser ? (
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <Link to={"/collection/favorites"}>My Favorites</Link>
            </li>
            <li>
              <Link to={"/collection/watchlist"}>My Watchlist</Link>
            </li>
          </ul>
        ) : (
          <ul className="bg-base-200 text-base-content min-h-full w-80 p-4">
            <li>
              <p className="text-center">
                You must be logged in to view your collections
              </p>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Drawer;
