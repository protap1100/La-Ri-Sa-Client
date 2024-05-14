import { Swiper, SwiperSlide } from "swiper/react";
import { useTypewriter } from "react-simple-typewriter";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Autoplay, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/swiper-bundle.css";
import { useState } from "react";
import image1 from "../../assets/images/banner-img/image1.png";
import image2 from "../../assets/images/banner-img/image2.png";
import image3 from "../../assets/images/banner-img/image3.png";
import image4 from "../../assets/images/banner-img/banner4.png";
import "animate.css";
SwiperCore.use([Navigation, Autoplay]);
const Banner = () => {
  const [swiper, setSwiper] = useState(null);
  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const [text] = useTypewriter({
    words: ["Safe Homes", "Best Environment", "Best Chief", "Best Security"],
    loop: true,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <div className="relative my-5 text-2xl font-Cave">
      <div className="my-10  font-Cave font-extrabold">
        <h1 className="font-bold text-3xl text-center">
          Welcome to
          <span className="text-3xl font-Titillium bg-gradient-to-r from-red-600 via-pink-500 to-indigo-400  text-transparent bg-clip-text">
            La Ri Sa
          </span>
        </h1>
        <h1 className="font-bold text-3xl text-center">
          We Offer You:
          <span className=" font-Titillium bg-gradient-to-r from-red-600 via-pink-500 to-indigo-400  text-transparent bg-clip-text ">
            {text}
          </span>
        </h1>
        <p className="px-5 md:px-40 lg:px-60 text-center my-5">
          Discover Your Perfect Escape! Explore Luxury Homes and Stunning
          Resorts. Book Your Dream Getaway Today for Unforgettable Memories and
          Relaxation. Start Your Journey Now!
        </p>
      </div>
      <Swiper
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        onSwiper={setSwiper}
        autoplay={{ delay: 3000 }} 
        loop={true}
      >
        <SwiperSlide>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center">
                <h1 className="font-bold text-3xl text-gray-800">
                  Luxury Rooms
                </h1>
                <p className="text-gray-600 mt-5">
                  Explore our luxurious rooms, designed to provide comfort and
                  elegance. Experience a peaceful retreat with modern amenities
                  and breathtaking views.
                </p>
              </div>
            </div>
            <img
              className="h-[600px] rounded-xl w-full object-cover"
              src={image1}
              alt="Luxury Room"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center">
                <h1 className="font-bold text-3xl text-gray-800">
                  Resort Getaways
                </h1>
                <p className="text-gray-600 mt-5">
                  Escape to our stunning resort getaways, where relaxation meets
                  adventure. Enjoy world-class amenities, gourmet dining, and
                  endless activities in a paradise setting.
                </p>
              </div>
            </div>
            <img
              className="h-[600px] rounded-xl w-full object-cover"
              src={image2}
              alt="Resort Getaway"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center">
                <h1 className="font-bold text-3xl text-gray-800">
                  Exclusive Suites
                </h1>
                <p className="text-gray-600 mt-5">
                  Indulge in our exclusive suites, where luxury meets
                  sophistication. Experience unparalleled comfort and
                  personalized service in a stylish and intimate setting.
                </p>
              </div>
            </div>
            <img
              className="h-[600px] rounded-xl w-full object-cover"
              src={image3}
              alt="Exclusive Suite"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg p-5 max-w-[80%] md:max-w-[50%] lg:max-w-[40%] rounded-xl xl:max-w-[30%] text-center">
                <h1 className="font-bold text-3xl text-gray-800">
                  Dream Destinations
                </h1>
                <p className="text-gray-600 mt-5">
                  Discover our dream destinations, where every moment is a
                  memory to cherish. Immerse yourself in luxury and adventure as
                  you explore the wonders of the world.
                </p>
              </div>
            </div>
            <img
              className="h-[600px] rounded-xl w-full object-cover"
              src={image4}
              alt="Dream Destination"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute inset-0 flex items-center justify-between">
        <div className="swiper-button-prev" onClick={goPrev}>
          &lt;
        </div>
        <div className="swiper-button-next" onClick={goNext}>
          &gt;
        </div>
      </div>
    </div>
  );
};

export default Banner;
