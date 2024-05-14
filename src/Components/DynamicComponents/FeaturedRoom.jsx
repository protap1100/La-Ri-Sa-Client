import { useEffect } from "react";
import { useState } from "react";
import SingleFeaturedRoom from "./SingleFeaturedRoom";
import { Link } from "react-router-dom";

const FeaturedRoom = () => {
  const [featuredRoom, setFeaturedRoom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/allRoom")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedRoom(data);
        setLoading(false);
      });
  }, []);

  // console.log(featuredRoom);

  return (
    <div className="my-10">
      {loading ? (
        <div className="flex justify-center items-center my-40">
          <span className="text-accent loading text-center loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
            {
                featuredRoom.slice(0,6).map(room => <SingleFeaturedRoom key={room._id} room={room}></SingleFeaturedRoom> )
            }
        </div>
      )}
      <div className="text-center my-5">
        <Link to='/allRoom' className="bg-btn p-2 text-white font-bold rounded hover:bg-btn-hover">See All Rooms</Link>
      </div>
    </div>
  );
};

export default FeaturedRoom;
