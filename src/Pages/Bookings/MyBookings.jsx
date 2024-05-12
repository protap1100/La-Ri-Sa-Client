import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingCard from "./BookingCard";

const MyBookings = () => {
    
    const {user} = useContext(AuthContext);
    const {email} = user;
    const [booking, setBooking] = useState([]);

    const url = `http://localhost:5000/bookedRooms?email=${email}`
    
    useEffect(() => {
        fetch(url, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                const newBooking = data.filter(item => item.availability === 'available');
                setBooking(newBooking);
            })
            .catch(error => {
                console.error('Error fetching booked rooms:', error);
            });
    }, []);
    console.log(booking)

    return (
        <div className="my-5">
            <h1 className="text-3xl font-bold text-red-700 text-center">My Booking</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    booking.map(book=> <BookingCard key={book._id} book={book}></BookingCard> )
                }
            </div>
        </div>
    );
};

export default MyBookings;