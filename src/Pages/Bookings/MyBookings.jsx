import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingCard from "./BookingCard";
import Swal from "sweetalert2";

const MyBookings = () => {
    
    const {user} = useContext(AuthContext);
    const {email} = user;
    const [booking, setBooking] = useState([]);
    // const [allRoomData,setAllRoomData] = useState([])

    const url = `http://localhost:5000/bookedRooms?email=${email}`
    
    useEffect(() => {
        fetch(url, { credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                const newBooking = data.filter(item => item.availability === 'notAvailable');
                setBooking(newBooking);
            })
            .catch(error => {
                console.error('Error fetching booked rooms:', error);
            });
    }, [url]);

    // console.log(booking)
    const cancelBooking = (id, newId) => {
      console.log(id,newId)
      // Make API call to update room availability
      Swal.fire({
          title: "Confirm Booking",
          html: "Are You Sure You Want to Cancel Booking",
          showCancelButton: true,
          confirmButtonText: "Cancel Booking",
          cancelButtonText: "Cancel",
          icon: "info",
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/bookingRoomDelete/${id}`, {
                  method: "DELETE",
              })
              .then((response) => {
                  if (response.ok) {
                      fetch(`http://localhost:5000/updatingRoomAvailability/${newId}`, {
                          method: "PUT",
                          headers: {
                            'content-type': 'application/json'
                          },
                          body: JSON.stringify({newId})
                      })
                      .then((updateResponse) => {
                          if (updateResponse.ok) {
                              Swal.fire("Room Canceled Successfully");
                              const newBooking = booking.filter(book => book._id !== id)
                              setBooking(newBooking);
                          } else {
                              console.error("Failed to update another API");
                          }
                      })
                      .catch((updateError) => {
                          console.error("Error updating another API:", updateError);
                      });
                  } else {
                      console.error("Failed to delete booking");
                  }
              })
              .catch((error) => {
                  console.error("Error deleting booking:", error);
              });
          }
      });
  };
  

    return (
        <div className="my-5">
            <h1 className="text-3xl font-bold text-red-700 text-center">My Booking: {booking.length} </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    booking.map(book=> <BookingCard key={book._id} cancelBooking={cancelBooking} book={book} user={user}></BookingCard> )
                }
            </div>
        </div>
    );
};

export default MyBookings;