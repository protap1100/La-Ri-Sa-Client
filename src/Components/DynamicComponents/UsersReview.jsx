import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

const UsersReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const colors = ["bg-gradient-to-r from-red-200 via-yellow-200 to-pink-200", "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200", "bg-gradient-to-r from-blue-200 via-violet-200 to-green-200"];
  console.log(reviews);

  return (
    <div className="my-5">
      <div className="my-10">
        <h1 className="font-bold text-3xl text-center">
          What Our Visitors Say About Us
        </h1>
        <p className="text-center my-5">Discover what our visitors love about us! Read their testimonials and explore the essence of their experiences with our services.</p>
      </div>
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
        className="h-60 rounded bg-gray-200"
      >
        {reviews.map((review, index) => (
          <SwiperSlide
            className={`rounded-xl shadow-lg p-5 ${
              colors[index % colors.length]
            }`}
            key={review._id}
          >
            <h1>
              <strong>Name:</strong> {review.username}
            </h1>
            <h1>
              <strong>Visited Date:</strong> {formatDate(review.time)}
            </h1>
            <h1>
              <strong>Experience:</strong> {review.experience}
            </h1>
            <h1>
              <strong>Rating:</strong> {review.rating}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UsersReview;
