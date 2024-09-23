import { useState } from "react";

function SignInPage() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleUserSignIn(e: any) {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  }

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
              name="username"
              className="border border-slate-400 rounded mt-2 w-[270px] h-10 pl-2"
              placeholder="Password"
              onChange={handleUserSignIn}
            />
          </div>
          <button className="mt-7 bg-blue-700 text-white border rounded-3xl w-[270px] h-10">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
