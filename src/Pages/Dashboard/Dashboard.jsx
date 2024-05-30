import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const [allRoom, setAllRoom] = useState([]);
  const [users, setUsers] = useState([]);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch("https://laarisa-booking-server-site.vercel.app/allAdminRoom")
      .then((res) => res.json())
      .then((data) => setAllRoom(data));
  }, []);


  useEffect(() => {
    fetch("https://laarisa-booking-server-site.vercel.app/allUserData")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


  useEffect(() => {
    fetch("https://laarisa-booking-server-site.vercel.app/contact")
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);


  if (loading) {
    return <h1 className="text-center text-2xl font-semibold">Loading...</h1>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="text-center mb-8">
        <h1 className="font-bold text-3xl text-blue-600">
          Hello {user?.displayName || user?.email}
        </h1>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            `p-2 font-semibold rounded ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/contactUs"
          className={({ isActive }) =>
            `p-2 font-semibold rounded ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            `p-2 font-semibold rounded ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`
          }
        >
          All Users
        </NavLink>
        <NavLink
          to="/dashboard/allAdminRooms"
          className={({ isActive }) =>
            `p-2 font-semibold rounded ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`
          }
        >
          All Hosted Rooms
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `p-2 font-semibold rounded ${
              isActive ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
            }`
          }
        >
          Main Home
        </NavLink>
      </div>
      <div>
        <div className="flex justify-evenly my-5 gap-5">
            <h1 className="text-3xl p-6 bg-gray-300">Total Available Rooms: {allRoom.length}</h1>
            <h1 className="text-3xl p-6 bg-blue-300">Total Active User: {users.length}</h1>
            <h1 className="text-3xl p-6 bg-yellow-300">Total Message From Customer: {contact.length}</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
