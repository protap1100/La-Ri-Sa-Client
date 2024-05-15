import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaAlignJustify } from "react-icons/fa";
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((res) => {
        console.log("logout done", res);
      })
      .catch((error) => {
        console.log("failed", error);
      });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar font-Poppins bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 rounded-xl">
        <div className="navbar-start font-Tali">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content space-y-4 mt-3 z-[1] p-2 shadow bg-slate-300 w-52"
            >
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-bold bg-activeLink p-2  text-white rounded-sm hover:bg-btn-hover"
                    : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2  text-white rounded-sm hover:bg-btn-hover"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/myBookings"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-bold bg-activeLink p-2  text-white rounded-sm hover:bg-btn-hover"
                    : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2  text-white rounded-sm hover:bg-btn-hover"
                }
              >
                My Bookings
              </NavLink>
              <NavLink
                to="/allRoom"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-bold bg-activeLink p-2  text-white rounded-sm hover:bg-btn-hover"
                    : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2  text-white rounded-sm hover:bg-btn-hover"
                }
              >
                All Room
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-bold bg-activeLink p-2  text-white rounded-sm hover:bg-btn-hover"
                    : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2  text-white rounded-sm hover:bg-btn-hover"
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/contactUs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "font-bold bg-activeLink p-2  text-white rounded-sm hover:bg-btn-hover"
                    : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2  text-white rounded-sm hover:bg-btn-hover"
                }
              >
                Contact Us
              </NavLink>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-Titillium bg-gradient-to-r from-red-600 via-blue-500 to-indigo-400  text-transparent bg-clip-text" >
            La Ri Sa
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-bold bg-activeLink p-2 mr-5 text-white rounded-sm hover:bg-btn-hover"
                  : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2 mr-5 text-white rounded-sm hover:bg-btn-hover"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/myBookings"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-bold bg-activeLink p-2 mr-5 text-white rounded-sm hover:bg-btn-hover "
                  : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2 mr-5 text-white rounded-sm hover:bg-btn-hover"
              }
            >
              My Bookings
            </NavLink>
            <NavLink
              to="/allRoom"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-bold bg-activeLink p-2 mr-5 text-white rounded-sm hover:bg-btn-hover "
                  : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2 mr-5 text-white rounded-sm hover:bg-btn-hover"
              }
            >
              All Room
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-bold bg-activeLink p-2 mr-5 text-white rounded-sm hover:bg-btn-hover "
                  : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2 mr-5 text-white rounded-sm hover:bg-btn-hover"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "font-bold bg-activeLink p-2 mr-5 text-white rounded-sm hover:bg-btn-hover "
                  : "font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 p-2 mr-5 text-white rounded-sm hover:bg-btn-hover"
              }
            >
              Contact Us
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <div
            data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName ? user.displayName : "No Username Available"}
            className="w-10 rounded-full tooltip mr-5"
          >
            <Tooltip id="my-tooltip" />
            {user ? (
              <img
                className="rounded-full"
                src={user.photoURL || "No Photo Url"}
              />
            ) : (
              ""
            )}
          </div>

          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
              >
                {<FaAlignJustify></FaAlignJustify>}
              </button>
              {isOpen && (
                <div className="absolute mt-1  bg-white shadow-md rounded-md">
                  <div className="py-1">
                    {user ? (
                      <div className="w-32 space-y-1">
                        <Link
                          to="/addRooms"
                          className="block px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-200 via-purple-200 to-green-200 text-gray-800 hover:bg-gray-100"
                          onClick={toggleDropdown}
                        >
                          Add Room
                        </Link>
                        <Link
                          to="/myRoom"
                          className="block px-4 py-2 text-gray-800 rounded-xl bg-gradient-to-r from-indigo-200 via-purple-200 to-green-200 hover:bg-gray-100"
                          onClick={toggleDropdown}
                        >
                          My Rooms
                        </Link>
                        <Link
                          to="/updateProfile"
                          className="block px-4 py-2 text-gray-800 rounded-xl bg-gradient-to-r from-indigo-200 via-purple-200 to-green-200 hover:bg-gray-100"
                          onClick={toggleDropdown}
                        >
                          Profile
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="block w-full text-left px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-200 via-purple-200 to-green-200 text-gray-800 hover:bg-gray-100"
                        >
                          Logout
                        </button>
                      </div>
                    ) : (
                      <Link
                        to="/login"
                        className="block px-4 py-2 text-gray-800 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gray-100"
                        onClick={toggleDropdown}
                      >
                        Login
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              className="ml-5 btn btn-primary border-btn-border hover:bg-btn-hover hover:border-btn-hover bg-btn"
              to="/login"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
