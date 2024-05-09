import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import ErrorPage from "../Pages/StaticPage/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import MyBookings from "../Pages/Bookings/MyBookings";
import About from "../Pages/StaticPage/About";
import ContactUs from "../Pages/StaticPage/ContactUs";

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
        },
        {
          path:'/myBookings',
          element: <MyBookings></MyBookings>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contactUs',
          element: <ContactUs></ContactUs>
        }
      ]
    },
  ]);