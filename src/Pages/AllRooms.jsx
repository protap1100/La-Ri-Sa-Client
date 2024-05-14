import { useEffect, useState } from "react";
import AllSingleRoom from "./AllSingleRoom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const AllRooms = () => {
  const [myRoom, setMyRoom] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    fetch(`http://localhost:5000/allRoom`, { credentials: "include" })
      .then((res) => res.json())
      .then((data) => {
        const availableRooms = data.filter(
          (room) => room.availability === "available"
        );
        setMyRoom(availableRooms);
        setLoading(false);
      });
  }, []);

  const handleFilter = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/filterRooms?minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      console.log("Response data:", response.data);
      setMyRoom(response.data);
    } catch (error) {
      console.error("Error filtering rooms:", error);
    }
    setLoading(false);
  };
  // console.log(myRoom)
  return (
    <div>
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="/src/assets/images/titleIcon/register.png"
        />
        <title>All Rooms</title>
      </Helmet>
      <div>
        <h1 className="text-center font-bold my-3 text-3xl bg-gradient-to-r from-blue-600 via-green-400 to-red-600  text-transparent bg-clip-text">
          Search Room According To Your Budget
        </h1>
      </div>
      <div className="mt-6 flex justify-center">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="border border-gray-400 rounded-md py-1 px-3"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="border border-gray-400 rounded-md py-1 px-3 ml-2"
        />
        <button
          onClick={handleFilter}
          className="ml-2 bg-btn  hover:bg-btn-hover text-white px-3 py-1 rounded-md"
        >
          Search
        </button>
      </div>

      {loading ? (
        <div className="my-40 text-center">
          <span className="loading loading-spinner text-error"></span>
        </div>
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
