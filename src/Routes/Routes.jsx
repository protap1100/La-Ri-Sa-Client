import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import ErrorPage from "../Pages/StaticPage/ErrorPage";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          index : true,
          element : <Home></Home>
        }
      ]
    },
  ]);