import { useEffect, useState } from "react";
import AllSingleRoom from "./AllSingleRoom";

const AllRooms = () => {
  const [myRoom, setMyRoom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/allRoom`,{credentials: 'include'})
      .then((res) => res.json())
      .then((data) => {
        const availableRooms = data.filter(
          (room) => room.availability === "available"
        );
        setMyRoom(availableRooms);
        setLoading(false);
      });
  }, []);

  console.log(myRoom);
  return (
    <div>
      {loading ? (
        <div className="my-40 text-center"><span className="loading loading-spinner text-error"></span></div>
            ) : (
        <div>
          <div className="mt-10">
            <h1 className="text-4xl text-center font-bold my-2 bg-gradient-to-r from-violet-600 via-red-400 to-blue-600  text-transparent bg-clip-text">
              Room That Are Available For Booking
            </h1>
            <p className="text-center mt-2">
              Explore our diverse selection of rooms, ranging from cozy retreats
              to luxurious accommodations, for your perfect stay
            </p>
            <h1 className="text-2xl font-bold  text-center ">
              Available Rooms: {myRoom.length}
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {myRoom?.map((room) => (
              <AllSingleRoom key={room._id} room={room}></AllSingleRoom>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllRooms;
