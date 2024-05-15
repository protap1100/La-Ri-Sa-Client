import { Helmet } from "react-helmet-async";
import FeaturedRoom from "../Components/DynamicComponents/FeaturedRoom";
import UsersReview from "../Components/DynamicComponents/UsersReview";
import Banner from "../Components/StaticComponents/Banner";
import Map from "../Components/StaticComponents/Map";
import NewsLetter from "../Components/StaticComponents/NewsLetter";
import OfferPromotions from "../Components/StaticComponents/OfferPromotions";
import OfferModal from "../Components/StaticComponents/OfferModal";
import {useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="font-Tali">
      <Helmet>
        <link
          rel="icon"
          type="image/png"
          href="/src/assets/images/titleIcon/register.png"
        />
        <title>Home</title>
      </Helmet>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
          {showModal && <OfferModal closeModal={closeModal} />}
        </div>
        <div className="relative z-0">
          <Banner />
        </div>
      </div>
      <NewsLetter></NewsLetter>
      <OfferPromotions></OfferPromotions>
      <FeaturedRoom></FeaturedRoom>
      <Map></Map>
      <UsersReview></UsersReview>
    </div>
  );
};

export default Home;
