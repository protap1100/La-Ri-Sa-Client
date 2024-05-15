import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingCard from "./BookingCard";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const MyBookings = () => {
    
    const {user} = useContext(AuthContext);
    const {email} = user;
    const [booking, setBooking] = useState([]);
    const [loading,setLoading] = useState(true);
    // const [allRoomData,setAllRoomData] = useState([])

    const url = `https://laarisa-booking-server-site.vercel.app/bookedRooms?email=${email}`
    
    useEffect(() => {
        fetch(url, { credentials: 'include'})
            .then(res => res.json())
            .then(data => {
                const newBooking = data.filter(item => item.availability === 'notAvailable');
                setBooking(newBooking);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching booked rooms:', error);
            });
    }, [url]);
    

    // console.log(booking)
    const cancelBooking = (id, newId,time) => {
    //   console.log(id,newId)

    const oneDayInMilliseconds = 24 * 60 * 60 * 1000; // One day in milliseconds
        // console.log(time) // 2024-05-14
    const currentDate = new Date(); // Get the current date
    const differenceInDays = Math.ceil((new Date(time).getTime() - currentDate.getTime()) / oneDayInMilliseconds);

    if (differenceInDays <= 1) {
        Swal.fire({
            title: "Cannot Cancel Booking",
            text: "You cannot cancel the booking as it is less than 1 day away.",
            icon: "warning",
        });
        return;
    }
      Swal.fire({
          title: "Confirm Booking",
          html: "Are You Sure You Want to Cancel Booking",
          showCancelButton: true,
          confirmButtonText: "Cancel Booking",
          cancelButtonText: "Cancel",
          icon: "info",
      }).then((result) => {
          if (result.isConfirmed) {
              fetch(`https://laarisa-booking-server-site.vercel.app/bookingRoomDelete/${id}`, {
                  method: "DELETE",
              })
              .then((response) => {
                  if (response.ok) {
                      fetch(`https://laarisa-booking-server-site.vercel.app/updatingRoomAvailability/${newId}`, {
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
            {
                loading ? <div className="text-center my-40"><span className="loading text-4xl loading-spinner text-success"></span> <h1 className="text-3xl font-bold text-red-600">Data is On Loading State Please Wait It Could Take few Seconds </h1> </div> : ''
            }
             <Helmet>
                <link rel="icon" type="image/png" href="/src/assets/images/titleIcon/register.png" />
                <title>My Bookings</title>
            </Helmet>
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