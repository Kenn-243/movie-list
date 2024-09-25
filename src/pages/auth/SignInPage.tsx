import { useEffect, useState } from "react";
import { falsifyUserError, signIn } from "../../reducers/user/userSlicer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import ErrorPopup from "../../components/ErrorPopup";

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loggedUser, isError } = useSelector((state: RootState) => state.user);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleUserSignIn(e: any) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (loggedUser) {
      navigate("/");
    }
  }, [loggedUser, navigate]);

  function handleSignIn() {
    if (user.username != "" && user.password != "") {
      dispatch(signIn({ username: user.username, password: user.password }));
    }
  }

  useEffect(() => {
    if (isError) {
      ErrorPopup("Wrong email or password");
      dispatch(falsifyUserError());
    }
  }, [isError, dispatch]);

  return (
    <div
      style={{ height: `calc(100vh - 200px)` }}
      className="flex justify-center items-center"
    >
      <div className="shadow flex justify-center border rounded w-[320px] h-[300px]">
        <div className="mt-5">
          <h1 className="font-bold text-3xl">Sign in</h1>
          <h5 className="mt-1 text-xs font-medium">
            Your very own movie collection
          </h5>
          <div className="mt-2 flex justify-center">
            <input
              type="text"
              name="username"
              className="border border-slate-400 rounded mt-2 w-[270px] h-10 pl-2"
              placeholder="Username"
              onChange={handleUserSignIn}
            />
          </div>
          <div className="mt-2 flex justify-center">
            <input
              type="password"
              name="password"
              className="border border-slate-400 rounded mt-2 w-[270px] h-10 pl-2"
              placeholder="Password"
              onChange={handleUserSignIn}
            />
          </div>
          <button
            onClick={handleSignIn}
            className="mt-7 bg-blue-700 text-white border rounded-3xl w-[270px] h-10"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
