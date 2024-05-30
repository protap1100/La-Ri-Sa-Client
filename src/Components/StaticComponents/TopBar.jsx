import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const TopHeader = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { user: authUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchUserData = async () => {
      if (authUser?.email) {
        try {
          const response = await fetch(`https://laarisa-booking-server-site.vercel.app/user/?email=${authUser?.email}`, { credentials: 'include' });
          const data = await response.json();
        //   console.log(data);
          setUser(data);
        } catch (error) {
          console.error('error', error);
        } finally {
          setLoading(false);
        }
      }
    };
    fetchUserData();
  }, [authUser?.email]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
if(loading){
    return <p>loading...</p>
}


  return (
    <div>
      <div className="bg-gray-800 py-4 ">
        <div className="flex px-5 justify-between items-center">
          <div>
            <Link to="/">
              <img
                className="rounded-xl lg:h-12 lg:w-20 h-8 w-32 "
                src={logo}
                alt=""
              />
            </Link>
          </div>
          <div className="flex">
            {/* {
                        user ? <Link to='' className="text-white btn bg-btn border-btn-border">Buy Now</Link> : <Link to='/login' className="btn bg-btn border-btn-border text-white">Login</Link>
                    }   */}
            {
                user && authUser ?  user?.role === "admin" ? (
                    <Link
                      to="dashboard"
                      className="p-2 text-white bg-gray-600 font-bold rounded hover:bg-btn-hover"
                    >
                      Dashboard
                    </Link>
                  ) : (
                    ""
                  ) : <><h1 className="text-red-600 font-bold">Only Admin Can See Dashboard</h1></>
            }




            <label className="ml-4 cursor-pointer grid place-items-center font-bold text-xl">
              <input
                onChange={handleThemeToggle}
                type="checkbox"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
