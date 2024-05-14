import { useState } from "react";
import image from "../../assets/images/addpage.png";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

const About = () => {
  const [stuffs, setStuffs] = useState([]);
  useEffect(() => {
    fetch("stuffs.json")
      .then((res) => res.json())
      .then((data) => setStuffs(data));
  }, []);

  const colors = ["bg-gradient-to-r from-red-200 via-yellow-200 to-pink-200", "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200", "bg-gradient-to-r from-blue-200 via-violet-200 to-green-200"];
console.log(stuffs)

  return (
    <div>
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            About Our Hostel
          </h2>
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="md:w-1/2">
              <img
                src={image}
                alt="Hostel Image"
                className="w-full rounded-lg mb-6 md:mb-0"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed mb-6">
                Welcome to our hostel, your home away from home! Nestled in the
                heart of [city], our hostel offers comfortable accommodations at
                affordable prices. Whether you re a solo traveler, a group of
                friends, or a family, we have the perfect room for you.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our hostel features modern amenities, including free Wi-Fi,
                communal kitchen, cozy common areas, and 24/7 front desk
                service. We strive to create a welcoming and inclusive
                environment where guests can relax, socialize, and make lasting
                memories.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Explore the vibrant [city] neighborhood, with its bustling
                markets, cultural landmarks, and lively nightlife. Our friendly
                staff are always on hand to provide recommendations and insider
                tips to help you make the most of your stay.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Whether you re here for a short visit or an extended stay, we
                look forward to welcoming you to our hostel and ensuring you
                have an unforgettable experience!
              </p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div>
          <h1 className="text-center text-3xl font-bold my-5">
            Here is Our Responsible Stuff And Their Basic Info
          </h1>
        </div>
        <div className="my-10">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{ delay: 4000 }}
            loop={true}
            modules={[Pagination]}
            className="h-full rounded bg-gray-200"
          >
            {stuffs.map((stuff, index) => (
              <SwiperSlide
                className={`rounded-xl shadow-lg p-5 ${
                  colors[index % colors.length]
                }`}
                key={stuff.staff_id}
              >
                <div>
                  <strong>Name:</strong> {stuff.name}
                  <img src={stuff.image_url} className="rounded h-40 w-60" alt="" />
                </div>
                <h1>
                  <strong>Position:</strong> {stuff.position}
                </h1>
                <h1>
                  <strong>Experience:</strong> {stuff.experience_years}
                </h1>
                <h1>
                  <strong>Rating:</strong> {stuff.position}
                </h1>
                <h1 className="h-48">
                  <strong>Description:</strong> {stuff.description}
                </h1>
                <h1>
                  <strong>Location:</strong> {stuff.Location}
                </h1>
                
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default About;
