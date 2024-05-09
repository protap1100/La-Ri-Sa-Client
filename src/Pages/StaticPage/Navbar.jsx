import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);

    const handleSignOut = () =>{
        logOut()
        .then((res) =>{
            console.log('logout done',res);
        })
        .catch((error=>{
            console.log('failed',error)
        }))
    }

    return (
        <div>
            <div className="navbar font-Poppins bg-orange-200 rounded-xl">
                <div className="navbar-start font-Tali">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to='/'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "" : ""
                        } >Home
                    </NavLink>
                    </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl font-Titillium">La Ri Sa</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                    <NavLink to='/'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold" : "bg-navLink p-2 mr-5 text-white rounded-sm hover:bg-btn-hover"
                            }>Home
                    </NavLink>
                    <NavLink to='/'  className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "font-bold" : "bg-navLink p-2 mr-5 text-white rounded-sm hover:bg-btn-hover"
                            }>My Bookings
                    </NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                <div className="w-10 rounded-full tooltip" data-tip={user?.displayName? user.displayName : 'No Username Available'}>
                    {
                        user ? <img className="rounded-full" src={user.photoURL || 'No Photo Url'}/>  : ''
                    }
                </div>
                   {
                        user ?  <Link onClick={handleSignOut} className="ml-5 btn btn-primary hover:bg-btn-hover border-btn-border  bg-btn" >Logout</Link> :
                        <Link className="ml-5 btn btn-primary border-btn-border hover:bg-btn-hover  bg-btn" to='/login'>Login</Link>
                    }
                </div>
                </div>
        </div>
    );
};

export default Navbar;