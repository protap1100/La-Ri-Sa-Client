import { useEffect, useState } from "react";

const AllContact = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch("https://laarisa-booking-server-site.vercel.app/contact")
      .then((res) => res.json())
      .then((data) => setContact(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center ">
        User Complain and Advice
      </h1>
      <h1 className="text-3xl font-bold text-yellow-500 text-center">Total Message: {contact.length}</h1>
      <div>
        <div className="my-10">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Serial No:</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Phone</th>
                  <th>Message</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {contact.map((u, i) => (
                  <tr key={i}>
                    <th>{i + 1}</th>
                    <td>{u.firstName}</td>
                    <td>{u.email}</td>
                    <td>{u.subject}</td>
                    <td>{u.phone}</td>
                    <td>{u.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllContact;
