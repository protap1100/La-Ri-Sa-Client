import { useEffect, useState } from "react";

const AllAdminRooms = () => {
    const [allRoom, setAllRoom] = useState([]);

  useEffect(() => {
    fetch("https://laarisa-booking-server-site.vercel.app/allAdminRoom")
      .then((res) => res.json())
      .then((data) => setAllRoom(data));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl ">
        Total User : {allRoom.length}
      </h1>
      <div className="my-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No:</th>
                <th>Room Desc</th>
                <th>Price</th>
                <th>Email</th>
                <th>Photo Url</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allRoom.map((u,i) => (
                <tr key={i}>
                  <th>{i+1}</th>
                  <td>{u.roomDesc}</td>
                  <td>{u.price}$</td>
                  <td>{u.email}</td>
                  <td><img className="h-12 w-12 rounded" src={u.image} alt="Profile Img" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllAdminRooms;