import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleRoom = ({ room,onDelete }) => {
  const { _id, roomDesc, price, size, availability } = room;

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        // Call onDelete callback passed from parent
        onDelete();
        Swal.fire(
          'Deleted!',
          'Your Paint has been deleted.',
          'success',
        );
      }
    });
  };

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
          className="p-2 rounded hover:bg-blue-950 text-white bg-blue-600 border-btn"
        >
          View Details
        </Link>
        
      </td>
      <td className="text-center"><Link to={`/updateRoom/${_id}`} className=" p-2 rounded bg-green-600 hover:bg-green-950 text-white" >Update</Link></td>
      <td className="text-center"><button onClick={handleDelete} className=" p-2 rounded bg-btn hover:bg-btn-hover text-white" >Delete</button></td>
    </tr>
  );
};

export default SingleRoom;
