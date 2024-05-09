import { useContext, useState } from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link,useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

  const {createUser,googleSignIn,GithubSignIn} = useContext(AuthContext);
  const [showPassword, setShowPassword]  = useState(false);
  const [wrongPassword, setWrongPassword] = useState('');
  const [regSuccess, setRegSuccess] = useState('');
  // const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () =>{
    // console.log('hello world');
    googleSignIn()
    .then(()=>{
      // console.log(res,'doing')
      toast.success('Google Login Completed')
      setTimeout(() => {
        navigate(location?.state ? location.state : '/')
      }, 2000);
      
    })
    .catch((error) =>{
      console.log(error,'login in failed')
    })
  }
  
  const handleGithubLogin = () =>{
    console.log('Hello world');
    GithubSignIn()
    .then(()=>{
      // console.log(res,'Hi')
      toast.success('Github Login Completed')
      setTimeout(() => {
        navigate(location?.state ? location.state : '/')
      }, 2000);
    })
    .catch(error=>{
      console.log(error,'github Login Done')
    })
  }

  const handleRegister = (e) =>{
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const photoURL = e.target.photo.value;
      // console.log(name,email,password,photoURL)

      if (!/(?=.*[a-z])/.test(password)) {
        setRegSuccess('')
        toast.error("Password must contain at least one lowercase letter");
        return;
      }else if(!/(?=.*[A-Z])/.test(password)){
        setRegSuccess('')
        toast.error("Password must contain at least one uppercase letter");
      }else if(password.length < 6){
        setRegSuccess('')
        toast.error('Password must be 6 character or higher')
      }else{
        createUser(email,password,name,photoURL)
        .then(res=>{
          console.log(res)
          setWrongPassword('')
          toast.success('You Have Registered Successfully')
          setTimeout(() => {
            navigate(location?.state ? location.state : '/login')
          }, 2000);
        })
        .catch(error=>{
          setWrongPassword('')
          setRegSuccess('')
          console.log('hocche na', error);
          toast.error(error.message);
          console.log(error.message)
        })
      }
  }


  return (
    <div className="container mt-10 mx-auto">
            {/* <Helmet>
                <link rel="icon" type="image/svg+xml" href="/src/assets/icon/register.png" />
                <title>Register</title>
            </Helmet> */}
      <div>
        <h1 className="text-3xl font-bold text-center my-10 animate__animated animate__fadeInDown">Register Here</h1>
      </div>
      <div className=" bg-base-200">
          <div className="py-10 flex items-center justify-center rounded-xl flex-col">
            <div className=" shrink-0 w-2/3 lg:w-2/4 py-10 border rounded-xl px-2 lg:px-20 bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="form-control animate__animated animate__fadeInDown">
                <label className="label">
                  <span className="label-text animate__animated animate__fadeInDown">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered animate__animated animate__fadeInDown"
                  required
                />
                <label className="label animate__animated animate__fadeInDown">
                  <span className="label-text ">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered animate__animated animate__fadeInDown"
                  required
                />
                <label className="label">
                  <span className="label-text animate__animated animate__fadeInDown">Photo Url</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo Url.."
                  className="input input-bordered animate__animated animate__fadeInDown"
                  required
                />
              </div>
              <div className="form-control animate__animated animate__fadeInDown">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative animate__animated animate__fadeInDown">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            name="password"
                            className="input animate__animated animate__fadeInDown input-bordered w-full" 
                            required
                        />
                        <span className="absolute animate__animated animate__fadeInDown inset-y-0 right-0 pr-3 flex items-center" onClick={() =>{
                                setShowPassword(!showPassword)
                            }} >
                            {
                                showPassword ? <FaEye className="text-gray-800 text-2xl cursor-pointer"/> : 
                                <FaEyeSlash className="text-gray-800 text-2xl cursor-pointer" /> 
                            }
                        </span>
                        </div>
                        <div>
                          <h1 className=" text-red-700">{wrongPassword}</h1>
                          <h1 className="text-green-600"> {regSuccess}</h1>
                          {/* <h1 className="text-red-600"> {error}</h1> */}
                        </div>
                <label className="label animate__animated animate__fadeInDown">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 animate__animated animate__fadeInDown">
                <button className="btn btn-primary bg-btn border-btn-border">Sign Up</button>
              </div>
            </form>
            <div> 
              <h1 className="mt-5 text-center animate__animated animate__fadeInDown">
                Do Not Have An Account?{" "}
                <Link className="font-bold text-green-700 animate__animated animate__fadeInDown"  to="/login">
                  Login
                </Link>
              </h1>
            </div>
            <div>
              <div onClick={handleGoogleLogin} className="p-5 animate__animated animate__fadeInDown text-center bg-blue-300 rounded-xl mt-5 flex items-center justify-center gap-10 hover:bg-blue-500  cursor-pointer">
                <h1>Login With Google</h1>
                <h1 className="text-xl">
                  <BsGoogle></BsGoogle>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
