import { useContext } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import addImage from "../../assets/images/addpage.png";
import Swal from "sweetalert2";

const UpdateRoom = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const newRoom = useLoaderData();
//   console.log(newRoom);
  const { 
      _id,
      roomDesc,
      price,
      availability,
      size,
      offer,
      image,
     } = newRoom;

  const handleUpdateRoom = (event) => {
    console.log("hello world");
    event.preventDefault();
    const form = event.target;
    const roomDesc = form.room.value;
    const newPrice = form.price.value;
    const price = parseInt(newPrice);
    const availability = form.availability.value;
    const size = form.size.value;
    const email = form.email.value;
    const image = form.image.value;
    const offer = form.offer.value;
    const RoomData = {
      roomDesc,
      price,
      availability,
      size,
      offer,
      image,
      email,
    };
    console.log(RoomData);
    fetch(`https://laarisa-booking-server-site.vercel.app/updateRoom/${_id}`,{
        method:'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(RoomData)
    })
    .then(res=> res.json())
    .then(data=>{
        console.log(data);
        if (data.modifiedCount > 0) {
            Swal.fire({
                title: 'Success!',
                text: 'Room Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
        }
        navigate(location?.state ? location.state : '/myRoom')
    })

  };

  return (
    <div>
        <div>
            <h1 className="my-10 text-center font-bold text-3xl text-red-400">Update Your Room Here</h1>
        </div>
      <div className="py-6 mt-5 bg-gray-200 dark:text-gray-900 rounded-xl">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6 flex items-center relative">
            <img className="rounded-xl" src={addImage} alt="" />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-lg font-bold p-5 bg-gray-700 rounded">
                Fill The Form To Update The Room Details
              </p>
            </div>
          </div>
          <form
            onSubmit={handleUpdateRoom}
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Room Description</span>
              <input
                type="text"
                name="room"
                defaultValue={roomDesc}
                placeholder="Room Description"
                className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Price Per Night (In Dollar)</span>
              <input
                type="number"
                name="price"
                defaultValue={price}
                placeholder="Price Per Night"
                className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
              />
            </label>
            <label className="block w-full px-2 lg:px-0 lg:w-1/2">
              <span className="mb-1">Availability</span>
              <select
                name="availability"
                className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                required
                defaultValue={availability}
              >
                <option disabled value="">
                  Select Stock Status
                </option>
                <option value="available">Available</option>
                <option value="notAvailable">Not Available</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-1">Room Size (In Sq)</span>
              <input
                name="size"
                type="number"
                defaultValue={size}
                placeholder="Room Size"
                className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                min="50"
                max="600"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email</span>
              <input
                name="email"
                type="email"
                readOnly
                defaultValue={user?.email}
                placeholder="Email"
                className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">
                Special Offer (In Percentage Max 60%)
              </span>
              <input
                name="offer"
                type="number"
                defaultValue={offer}
                placeholder="Special Offer"
                className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                min="1"
                max="60"
              />
            </label>
            <label className="block">
              <span className="mb-1">Image</span>
              <input
                name="image"
                type="text"
                placeholder="Image Url"
                defaultValue={image}
                className="block h-10 w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
              />
            </label>
            <button
              type="submit"
              className="self-center w-full btn btn-primary border-btn-border hover:bg-btn-hover hover:border-btn-hover bg-btn"
            >
              Update Room
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoom;
