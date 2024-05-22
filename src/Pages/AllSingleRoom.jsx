import 'aos/dist/aos.css';
import Aos from 'aos';
import {  Link } from "react-router-dom";
import { useEffect } from 'react';

const AllSingleRoom = ({room}) => {
    const {_id,roomDesc,size,image,offer,availability,price} = room;
    // const hi = useLocation();
    // console.log(hi)

    useEffect(()=>{
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true 
        });
    },[])

    return (
        <div data-aos='fade-right' className="flex flex-col my-5 justify-center items-center bg-gradient-to-r from-red-100 via-yellow-100 to-pink-100 space-y-3 py-5 shadow-xl rounded">
            <Link to={`/roomDetails/${_id}`}><img className="h-96 w-96 rounded-xl" src={image} alt="" /></Link>
            <h1 className="text-center px-5">Desc: {roomDesc}</h1>
            <div className='flex gap-5 justify-between'>
            <h1> <strong>Room Size</strong> :{size}Sq</h1>
            <h1> <strong>Price</strong> :{price}$</h1>
            </div>
            <div className='flex gap-5 justify-between'>
            <h1> <strong>Offer:</strong>{offer} </h1>
            <h1>{availability ? <p className="text-green-600">Available</p> : <p className="text-red-600">Not Available</p>}</h1>
            </div>
            <Link to={`/roomDetails/${_id}`} className="p-2 bg-btn-border rounded hover:bg-btn-hover text-white">View Details</Link>
        </div>
    );
};

export default AllSingleRoom;