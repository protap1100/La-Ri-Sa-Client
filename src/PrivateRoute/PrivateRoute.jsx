import { useContext } from "react";
import { Navigate,useLocation } from 'react-router-dom';
import { AuthContext } from "../Provider/AuthProvider";



const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname)

    if(loading){
      return <div className="flex justify-center items-center my-40">
         <span className="text-accent loading text-center loading-spinner loading-lg"></span>
      </div>
    }

    if(user){
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default PrivateRoute;