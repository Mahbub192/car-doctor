import { createBrowserRouter } from "react-router-dom";
import LoginOrSignup from "../layout/LoginOrSignup";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/", // Change the child route path to a relative path
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/auth",
    element: <LoginOrSignup></LoginOrSignup>,
    children: [
      {
        path: "login", // This is already a relative path
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default router;
