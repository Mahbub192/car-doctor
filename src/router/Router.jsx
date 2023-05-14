import { createBrowserRouter } from "react-router-dom";
import LoginOrSignup from "../layout/LoginOrSignup";
import Main from "../layout/Main";
import Bookings from "../pages/Bookings/Bookings";
import CheckOut from "../pages/CheckOut/CheckOut";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivatRout from "./PrivatRout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/", // Change the child route path to a relative path
        element: <Home></Home>,
      },
      {
        path:'checkout/:id',
        element:<PrivatRout><CheckOut></CheckOut></PrivatRout>,
        loader:({params})=>fetch(`https://car-doctor-server-ebon.vercel.app/services/${params.id}`)
      },
      {
        path:'bookings',
        element:<PrivatRout><Bookings></Bookings></PrivatRout>
      }
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
