import { useContext, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
    const {user,updateUserProfile} = useContext(AuthContext);

    const [formData, setFormData] = useState({
    name: user?.displayName || '',
    photoURL: user?.photoURL || '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
        }));
    };

    
    const handleUpdateProfile = (event) => {
        event.preventDefault();
        const newDisplayName = formData.name ;
        const newPhotoURL =formData.photoURL ;

        updateUserProfile(newDisplayName, newPhotoURL)
            .then(() => {
               toast.success('Profile updated successfully');
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
            });
    }

    // console.log(user ? user.email : 'No Email')
    // console.log(user) 

    return (    
        <div className="mt-5 container mx-auto">
            {/* <Helmet>
                <title>Update Profile</title>
            </Helmet> */}
            <h1 className="text-center my-5 font-bold text-2xl text-green-400">Update Your Profile Here</h1>
            <div className="border border-black" ></div>
            <div className="flex flex-col justify-center items-center my-10">
                <h1 className="text-2xl font-bold">Hi <span className="text-red-400"> {user?.displayName ? user?.displayName : user?.email}!! </span></h1>
                <img className="h-72 w-72 mt-5 rounded-xl" src={user?user.photoURL : 'pp' } alt="Photo" />
            </div>
            <div className="py-5 flex items-center justify-center rounded-xl flex-col">
                 <div className="shrink-0 w-2/3 lg:w-2/4 py-5 border rounded-xl px-2 lg:px-20 bg-base-100 ">
                    <form onSubmit={handleUpdateProfile} className="my-10 border border-btn flex flex-col justify-center rounded-xl items-center ">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Current Name</span>
                            </label>
                            <input
                            type="text"
                            name='name'
                            value={formData?.name}
                            placeholder={user?.displayName ? user?.displayName : 'Enter New Name'}
                            className="input input-bordered"
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Current Photo Url</span>
                            </label>
                            <input
                            type="text"
                            name='photoURL'
                            value={formData?.photoURL}
                            placeholder={user?.photoURL ? user?.photoURL : 'Enter New Photo Url'}
                            className="input input-bordered"
                            onChange={handleInputChange}
                            required
                            />
                        </div>
                        <button  className="btn my-5 bg-btn border  text-white border-btn" > Update Profile </button>
                    </form>
                </div>
                <ToastContainer></ToastContainer>
            </div>
          
            
        </div>
    );
};

export default UpdateProfile;