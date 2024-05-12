import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  const singleRoomDetails = useLoaderData();
  const { roomDesc, image, size, price, availability, offer } =
    singleRoomDetails;
  
    const email = user?.email;

    const handleBooking = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const userEmail = form.email.value;
      const phone = form.phone.value;
      const date = form.checkInDate.value;

      const bookingData = {
        roomDesc,
        size,
        price,
        availability: 'notAvailable', 
        offer,
        email,
        name,
        userEmail,
        date,
        phone,
        image
    };

      const modalContent = `
          <div>
              <p><strong>Description:</strong> ${roomDesc}</p>
              <p><strong>Room Size:</strong> ${size} Sq</p>
              <p><strong>Price:</strong> ${price}$</p>
              <p><strong>Availability:</strong> ${availability ? 'Available' : 'Not Available'}</p>
              <p><strong>Offer:</strong> ${offer}% For Booking Right Now</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${userEmail}</p>
              <p><strong>Email:</strong> ${image}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Check In Date:</strong> ${date}</p>
          </div>
      `;
      Swal.fire({
          title: 'Confirm Booking',
          html: modalContent,
          showCancelButton: true,
          confirmButtonText: 'Book Now',
          cancelButtonText: 'Cancel',
          icon: 'info'
      }).then((result) => {
          if (result.isConfirmed) {
              fetch('http://localhost:5000/bookedRooms', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(bookingData)
              })
              .then(response => {
                  if (response.ok) {
                      return response.json();
                  }
                  throw new Error('Network response was not ok.');
              })
              .then(data => {
                  console.log('Room data saved successfully:', data);
                  Swal.fire("You Have Booked This Room Successfully!! <br> Enjoy Our Service and Give us a feedback");
              })
              .catch(error => {
                  // Handle errors
                  console.error('Error saving room data:', error);
                  Swal.fire("Failed to book the room. Please try again later.", "", "error");
              });
          }
      });
  }

  return (
    <div className="flex flex-col justify-center items-center my-5">
      <div>
        <h1 className="text-3xl font-bold text-center my-10">
          Details And Review About This Room
        </h1>
      </div>
      <div>
        <img className="h-96 w-96" src={image} alt="" />
      </div>
      <div className="space-y-3 w-full lg:w-1/2 text-center bg-gray-200 p-5 my-20">
        <p className="text lg:px-20 md:px-5 px-2 gray-600">
          <strong className="text-2xl font-bold">
            Description <br />
          </strong>
          {roomDesc}
        </p>
        <p className="text-2xl font-bold text gray-600">Room Size:{size} Sq</p>
        <p className="text-2xl font-bold text gray-600">Price:{price}$</p>
        <h1 className="text-2xl font-bold text gray-600">
          {availability ? <p className="text-green-700">Available</p> : ""}
        </h1>
        <p className="text-2xl font-bold text gray-600">
          Offer:{offer}% For Booking Right Now
        </p>

        {user ?    <div className="bg-gray-100">
          <h1 className="text-2xl font-bold text-blue-500  text-center my-10 ">
            Fill The Form to Book This Room{" "}
          </h1>
          <form onSubmit={handleBooking}>
            <div className="form-control animate__animated animate__fadeInDown">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="animate__animated animate__fadeInDown input input-bordered"
                required
              />
            </div>
            <div className="form-control animate__animated animate__fadeInDown">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                readOnly
                placeholder="Email"
                className="animate__animated animate__fadeInDown input input-bordered"
                required
              />
            </div>
            <div className="form-control animate__animated animate__fadeInDown">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                placeholder="Your Phone Number"
                className="animate__animated animate__fadeInDown input input-bordered"
                required
              />
            </div>
            <div className="form-control animate__animated animate__fadeInDown">
              <label className="label">
                <span className="label-text">Check In Date</span>
              </label>
              <input
                type="date"
                name="checkInDate"
                min={new Date().toISOString().split("T")[0]} 
                className="animate__animated animate__fadeInDown input input-bordered"
                required
              />
            </div>
            <button
              type="submit"
              className="my-5 bg-btn p-2 text-white font-bold rounded  hover:bg-btn-hover"
            >
              Book Now
            </button>
          </form>
        </div> : <div> <h1  className="text-3xl font-bold text-center text-green-800">Login To Book This Room</h1> </div> }
      </div>
    </div>
  );
};

export default RoomDetails;
