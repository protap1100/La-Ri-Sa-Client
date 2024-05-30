import { useEffect, useState } from "react";

const AllUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://laarisa-booking-server-site.vercel.app/allUserData")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-2xl ">
        Total User : {user.length}
      </h1>
      <div className="my-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No:</th>
                <th>Name</th>
                <th>Email</th>
                <th>Photo Url</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {user.map((u,i) => (
                <tr key={i}>
                  <th>{i+1}</th>
                  <td>{u.name}</td>
                  <td>{u.email}</td>
                  <td><img src={u.photoURL} alt="Profile Img" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
