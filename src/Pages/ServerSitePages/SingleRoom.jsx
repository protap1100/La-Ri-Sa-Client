import { Link } from "react-router-dom";

const SingleRoom = ({ room }) => {
  const { _id, roomDesc, price, size, availability } = room;

  return (
    <tr className="animate__animated animate__fadeInLeft">
      <td className="p-2 ">{_id}</td>
      <td className="p-2">{roomDesc}</td>
      <td className="p-2">{price}$</td>
      <td className="p-2">{size} Sq</td>
      <td className="p-2">{availability === "available" ? <p className="text-green-600">Available</p> : <p className="text-red-600">Not Available</p>}</td>
      <td>
        <Link
          to={`/roomDetails/${_id}`}
          className="btn text-white bg-btn border-btn"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default SingleRoom;
