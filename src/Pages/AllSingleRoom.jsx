import {  Link, useLocation } from "react-router-dom";

const AllSingleRoom = ({room}) => {
    const {_id,roomDesc,size,image,offer,availability} = room;
    const hi = useLocation();
    console.log(hi)
    return (
        <div className="flex flex-col justify-center items-center space-y-3 ">
            <div><img className="h-96 w-96" src={image} alt="" /></div>
            <h1 className="text-center">Desc: {roomDesc}</h1>
            <h1> <strong>Room Size</strong> :{size}</h1>
            <h1> <strong>Offer:</strong>{offer} </h1>
            <h1>{availability ? <p className="text-green-600">Available</p> : <p className="text-red-600">Not Available</p>}</h1>
            <Link to={`/roomDetails/${_id}`} className="p-2 bg-btn-border rounded hover:bg-btn-hover">View Details</Link>
        </div>
    );
};

export default AllSingleRoom;