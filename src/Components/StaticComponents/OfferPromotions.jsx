const OfferPromotions = () => {
    return (
        <div>
            <div className="h-40 md:w-full w-full flex items-center lg:w-4/6 rounded-xl mx-auto bg-gradient-to-r from-blue-500 via-purple-100 to-indigo-500">
                <div className="flex  bg-red-400 items-center justify-between">
                    <div className="text-lg">
                        <p>Exclusive Offer!</p>
                        <ul>
                            <li>Up to <strong>25% Discount</strong> on booking LaRiSa Homes from our website</li>
                            <li> <strong>First 100 Bookings </strong> to receive a bottle of fine indian wine</li>
                        </ul>
                    </div>
                    <div>
                        <button className="font-bold bg-black p-3 text-white gap-4">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferPromotions;