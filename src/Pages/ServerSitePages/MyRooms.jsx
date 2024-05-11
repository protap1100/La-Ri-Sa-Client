import { Link} from "react-router-dom";
import SingleRoom from "./SingleRoom";
import { useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const MyRooms = () => {

    const {user} = useContext(AuthContext);

    const {email} = user;

    const [myRoom, setMyRoom] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/allRoom?email=${email}`)
          .then(res => res.json())
          .then(data => setMyRoom(data));
      }, []);

    return (
        <div>
        <h1 className="text-3xl font-bold text-center my-10 text-rose-400">All Rooms:{myRoom.length} </h1>
         <div  className="rounded-lg bg-gray-200 overflow-hidden shadow-md p-4">
         {/* <Helmet>
            <title>My Room</title>
        </Helmet> */}
         <div className="overflow-x-auto">
            <table className="w-full">
                <tbody>
                    <tr>
                        <td className="font-semibold p-2">ID</td>
                        <td className="font-semibold p-2">Room Desc</td>
                        <td className="font-semibold p-2">Price</td>
                        <td className="font-semibold p-2">Size</td>
                        <td className="font-semibold p-2">Availability</td>
                        <td className="font-semibold p-2">View Details</td>
                    </tr>
                    {myRoom.map(room => <SingleRoom key={room._id} room={room}></SingleRoom>)}
                </tbody>
            </table>
         </div>
        </div>
        <div className="flex my-5 justify-end">
             <Link to="/addRooms" className="btn border-btn-border  bg-btn text-white">Add Paint </Link>
        </div>
    </div>
    );
};

export default MyRooms;