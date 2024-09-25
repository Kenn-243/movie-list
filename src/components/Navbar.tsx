import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
import { logout } from "../reducers/user/userSlicer";

function Navbar() {
  const { loggedUser } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }

  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Movie List
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {loggedUser == null ? (
            <li>
              <Link to="/auth/sign-in">Login</Link>
            </li>
          ) : (
            <li className="z-10">
              <details>
                <summary>{loggedUser.username}</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </details>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
