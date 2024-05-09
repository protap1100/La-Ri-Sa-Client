import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import ErrorPage from "../Pages/StaticPage/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          index : true,
          element : <Home></Home>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path:'/register',
          element : <Register></Register>
        }
      ]
    },
  ]);