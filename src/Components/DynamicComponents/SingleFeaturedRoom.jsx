import { Link } from "react-router-dom";

const SingleFeaturedRoom = ({room}) => {

    const {_id,roomDesc,size,image,offer,availability} = room;
    // const hi = useLocation();
    // console.log(hi)
    return (
        <div className="flex flex-col justify-center  px-14 items-center space-y-3 shadow-xl rounded bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 py-5">
            <div><img className="h-96 w-96 rounded" src={image} alt="" /></div>
            <h1 className="text-center"><strong>Description</strong> : {roomDesc}</h1>
            <h1> <strong>Room Size</strong> :{size}</h1>
            <h1> <strong>Offer:</strong>{offer} %Off For This Room </h1>
            <h1>{availability ? <p className="text-green-600">Available</p> : <p className="text-red-600">Not Available</p>}</h1>
            <Link to={`/roomDetails/${_id}`} className="bg-btn p-2 text-white font-bold rounded hover:bg-btn-hover">View Details</Link>
        </div>
    );
};

export default SingleFeaturedRoom;