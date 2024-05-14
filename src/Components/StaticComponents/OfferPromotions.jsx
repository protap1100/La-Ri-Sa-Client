import { Link } from "react-router-dom";

const OfferPromotions = () => {
    return (
        <div>
            <div className="h-40 md:w-full w-full flex items-center lg:w-4/6 rounded-xl mx-auto bg-gradient-to-r from-blue-500 via-purple-100 to-indigo-500">
                <div className="flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  mx-auto md:gap-5 gap-2 px-3 rounded py-2 lg:gap-20 items-center justify-between">
                    <div className="lg:text-lg text-sm ">
                        <p>Exclusive Offer!</p>
                        <ul>
                            <li>Up to <strong>25% Discount</strong> on booking LaRiSa Homes from our website</li>
                            <li> <strong>First 100 Bookings </strong> to receive a bottle of fine indian wine</li>
                        </ul>
                    </div>
                    <div>
                        <Link to='/allRoom' className="font-bold bg-black p-3 text-white gap-4 rounded">Book Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferPromotions;