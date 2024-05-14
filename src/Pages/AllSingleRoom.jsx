import {  Link } from "react-router-dom";

const AllSingleRoom = ({room}) => {
    const {_id,roomDesc,size,image,offer,availability,price} = room;
    // const hi = useLocation();
    // console.log(hi)
    return (
        <div className="flex flex-col my-5 justify-center items-center bg-gradient-to-r from-red-100 via-yellow-100 to-pink-100 space-y-3 py-5 shadow-xl rounded">
            <div><img className="h-96 w-96 rounded-xl" src={image} alt="" /></div>
            <h1 className="text-center px-5">Desc: {roomDesc}</h1>
            <h1> <strong>Room Size</strong> :{size}</h1>
            <h1> <strong>Price</strong> :{price}</h1>
            <h1> <strong>Offer:</strong>{offer} </h1>
            <h1>{availability ? <p className="text-green-600">Available</p> : <p className="text-red-600">Not Available</p>}</h1>
            <Link to={`/roomDetails/${_id}`} className="p-2 bg-btn-border rounded hover:bg-btn-hover text-white">View Details</Link>
        </div>
    );
};

export default AllSingleRoom;