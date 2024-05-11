import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const RoomDetails = () => {
  const {user} = useContext(AuthContext);
  const singleRoomDetails = useLoaderData();
  const { roomDesc, image, size, price, availability, offer } =
    singleRoomDetails;

  const email = user?.email ;

    const handleBooking = () => {
        const modalContent = `
            <div>
                <p><strong>Description:</strong> ${roomDesc}</p>
                <p><strong>Room Size:</strong> ${size} Sq</p>
                <p><strong>Price:</strong> ${price}$</p>
                <p><strong>Availability:</strong> ${availability ? 'Available' : 'Not Available'}</p>
                <p><strong>Offer:</strong> ${offer}% For Booking Right Now</p>
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
                    body: JSON.stringify({
                        roomDesc,
                        size,
                        price,
                        availability,
                        offer,
                        email
                    })
                })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error('Network response was not ok.');
                })
                .then(data => {
                    console.log('Room data saved successfully:', data);
                    Swal.fire("You Have Booked This Room Successfully!!");
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
        <img src={image} alt="" />
      </div>
      <div className="space-y-3 text-center bg-gray-200 p-5 my-20">
        <p className="text-2xl font-bold text gray-600">
          <strong>
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
        
        <button
          onClick={handleBooking}
          className="my-5 bg-btn p-2 text-white font-bold rounded  hover:bg-btn-hover"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default RoomDetails;
