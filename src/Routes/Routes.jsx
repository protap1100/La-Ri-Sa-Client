import { createBrowserRouter } from "react-router-dom";
import MainPage from "../Pages/MainPage";
import ErrorPage from "../Pages/StaticPage/ErrorPage";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import MyBookings from "../Pages/Bookings/MyBookings";
import About from "../Pages/StaticPage/About";
import ContactUs from "../Pages/StaticPage/ContactUs";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddRooms from "../Pages/ServerSitePages/AddRooms";
import MyRooms from "../Pages/ServerSitePages/MyRooms";
import AllRooms from "../Pages/AllRooms";
import RoomDetails from "../Pages/RoomDetails";
import UpdateRoom from "../Pages/ServerSitePages/UpdateRoom";
import UpdateProfile from "../Pages/Authentication/UpdateProfile";

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
          path:'/updateProfile',
          element : <UpdateProfile></UpdateProfile>
        },
        {
          path:'/myBookings',
          element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contactUs',
          element:<ContactUs></ContactUs>
        },
        {
          path:'/addRooms',
          element:<PrivateRoute><AddRooms></AddRooms> </PrivateRoute>
        },
        {
          path:'/myRoom',
          element : <PrivateRoute><MyRooms></MyRooms></PrivateRoute>,
        },
        {
          path:'/allRoom',
          element : <AllRooms></AllRooms>,
          loader : () => fetch('https://laarisa-booking-server-site.vercel.app/allRoom')
        },
        {
          path:'/roomDetails/:id',
          element : <RoomDetails></RoomDetails>,
          loader : ({params}) => fetch(`https://laarisa-booking-server-site.vercel.app/roomDetails/${params.id}`)
        },
        {
          path:'/updateRoom/:id',
          element : <UpdateRoom></UpdateRoom>,
          loader : ({params}) => fetch(`https://laarisa-booking-server-site.vercel.app/updateRoom/${params.id}`)
        }
      ]
    },
  ]);