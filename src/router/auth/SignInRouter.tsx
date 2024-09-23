import { RouteObject } from "react-router-dom";
import SignInPage from "../../pages/auth/SignInPage";

export const SignInRouter: RouteObject[] = [
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
];
