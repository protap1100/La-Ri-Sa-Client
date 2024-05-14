import FeaturedRoom from "../Components/DynamicComponents/FeaturedRoom";
import UsersReview from "../Components/DynamicComponents/UsersReview";
import Banner from "../Components/StaticComponents/Banner";
import Map from "../Components/StaticComponents/Map";
import NewsLetter from "../Components/StaticComponents/NewsLetter";
import OfferPromotions from "../Components/StaticComponents/OfferPromotions";

const Home = () => {
    return (
        <div className="font-Tali">
           <Banner></Banner>
           <NewsLetter></NewsLetter>
           <OfferPromotions></OfferPromotions>
           <FeaturedRoom></FeaturedRoom>
           <Map></Map>
           <UsersReview></UsersReview>
        </div>
    );
};

export default Home;