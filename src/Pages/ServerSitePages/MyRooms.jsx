import { Link } from "react-router-dom";
import SingleRoom from "./SingleRoom";
import { useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import axios from "axios";

const MyRooms = () => {
  const { user } = useContext(AuthContext);

  const [myRoom, setMyRoom] = useState([]);

  const url = `https://laarisa-booking-server-site.vercel.app/allMyRooms?email=${user?.email}`;

  useEffect(() => {
    axios.get(url, { withCredentials: true }).then((res) => {
      setMyRoom(res.data);
    });
    // fetch(`https://laarisa-booking-server-site.vercel.app/allMyRooms?email=${email}`)
    //   .then(res => res.json())
    //   .then(data => setMyRoom(data));
  }, [url]);

  const handleDelete = (id) => {
    fetch(`https://laarisa-booking-server-site.vercel.app/allRoom/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.deletedCount > 0) {
          const remainingRoom = myRoom.filter((room) => room._id !== id);
          setMyRoom(remainingRoom);
        }
      })
      .catch((error) => {
        console.error("Error deleting Room:", error);
      });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-10 text-rose-400">
        All Rooms:{myRoom.length}{" "}
      </h1>
      <div className="rounded-lg bg-gray-200 overflow-hidden shadow-md p-4">
        {/* <Helmet>
            <title>My Room</title>
        </Helmet> */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-semibold p-2 text-center">ID</td>
                <td className="font-semibold p-2 text-center">Room Desc</td>
                <td className="font-semibold p-2 text-center">Price</td>
                <td className="font-semibold p-2 text-center">Size</td>
                <td className="font-semibold p-2 text-center">Availability</td>
                <td className="font-semibold p-2 text-center">View Details</td>
                <td className="font-semibold p-2 text-center">Update</td>
                <td className="font-semibold p-2 text-center">Delete</td>
              </tr>
              {myRoom.map((room) => (
                <SingleRoom
                  key={room._id}
                  room={room}
                  onDelete={() => handleDelete(room._id)}
                ></SingleRoom>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex my-5 justify-end">
        <Link
          to="/addRooms"
          className="p-2 rounded hover:bg-btn-hover border-btn-border  bg-btn text-white"
        >
          Add Room{" "}
        </Link>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md max-w-md">
          <h1 className="text-xl text-center font-bold mb-4">Note</h1>
          <p className="text-gray-700 text-center">
            Do Not Change The Availability If the room is already Booked
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyRooms;
