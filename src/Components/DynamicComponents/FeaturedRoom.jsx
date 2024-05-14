import { useEffect } from "react";
import { useState } from "react";
import SingleFeaturedRoom from "./SingleFeaturedRoom";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";

const FeaturedRoom = () => {
  const [featuredRoom, setFeaturedRoom] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/allRoom")
      .then((res) => res.json())
      .then((data) => {
        const availableRooms = data.filter(
          (room) => room.availability === "available"
        );
        setFeaturedRoom(availableRooms);
        setLoading(false);
      });
  }, []);

  // console.log(featuredRoom);
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="my-20" data-aos='fade-right'>
      <div className="my-10 space-y-3">
        <h1 className="text-center font-bold text-3xl">
          Here is All Our Featured Room
        </h1>
        <h1 className="text-center px-4">
          These Room are available For booking You can check about peoples
          review about this these room by clicking view details
        </h1>
      </div>
      {loading ? (
        <div className="flex justify-center items-center my-40">
          <span className="text-accent loading text-center loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          {featuredRoom.length < 1 ? (
            <div className="text-center text-2xl">No Rooms Available</div>
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
              {featuredRoom?.slice(0, 6).map((room) => (
                <SingleFeaturedRoom
                  key={room._id}
                  room={room}
                ></SingleFeaturedRoom>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="text-center mt-10">
        {featuredRoom.length < 1 ? (
          ""
        ) : (
          <Link
            to="/allRoom"
            className="bg-btn p-2 text-white font-bold rounded hover:bg-btn-hover"
          >
            See All Rooms
          </Link>
        )}
      </div>
    </div>
  );
};

export default FeaturedRoom;
