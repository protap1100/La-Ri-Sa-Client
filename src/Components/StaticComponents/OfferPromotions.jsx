import { Link } from "react-router-dom";
import image from "../../assets/images/offerImage.png";

const OfferPromotions = () => {
  return (
    <div>
      <div className="lg:h-40  md:w-5/6 w-full flex items-center lg:w-4/6 rounded-xl mx-auto bg-gradient-to-r from-blue-500 via-purple-100 to-indigo-500">
        <div className="flex bg-gradient-to-r flex-col lg:flex-row from-indigo-500 via-purple-500 to-pink-500  mx-auto md:gap-5 gap-2 px-3 rounded py-2 lg:gap-20 items-center justify-between">
          <div className="lg:text-lg text-sm ">
            <p>Exclusive Offer!</p>
            <ul>
              <li>
                Up to <strong>25% Discount</strong> on booking LaRiSa Homes from
                our website
              </li>
              <li>
                <strong>First 100 Bookings </strong> to receive a bottle of fine
                indian wine
              </li>
            </ul>
          </div>
          <div>
            <Link
              to="/allRoom"
              className="font-bold bg-black p-3 text-white lg:gap-4 rounded"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      <div className="h-80 w-full md:w-full  flex lg:flex-row flex-col items-center lg:w-4/6 rounded-xl mx-auto">
        <div>
          <img className="rounded " src={image} alt="" />
        </div>
        <div className="bg-gradient-to-r from-blue-100 via-purple-300 to-indigo-400  py-4 lg:py-12 rounded-xl">
          <h1 className="text-2xl font-bold">
            Exclusive offers on booking directly from our website
          </h1>
          <ul>
            <li className="font-bold ml-5">
              <strong>*</strong> 10% Discount on booking
            </li>
            <li className="font-bold ml-5">
              <strong>*</strong> 20% Discount on First Booking
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OfferPromotions;
