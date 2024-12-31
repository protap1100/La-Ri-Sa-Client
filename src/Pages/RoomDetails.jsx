import { useContext, useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";

const RoomDetails = () => {
  const { user } = useContext(AuthContext);
  const singleRoomDetails = useLoaderData();
  const { _id, roomDesc, image, size, price, availability, offer } =
    singleRoomDetails;

  const location = useLocation();
  const navigate = useNavigate();

  const email = user?.email;

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const userEmail = form.email.value;
    const phone = form.phone.value;
    const date = form.checkInDate.value;
    const newId = _id;

    const bookingData = {
      roomDesc,
      size,
      price,
      availability: "notAvailable",
      offer,
      email,
      name,
      userEmail,
      date,
      phone,
      image,
      newId,
    };

    const modalContent = `
          <div>
              <p><strong>Description:</strong> ${roomDesc}</p>
              <p><strong>Room Size:</strong> ${size} Sq</p>
              <p><strong>Price:</strong> ${price}$</p>
              <p><strong>Availability:</strong> ${
                availability ? "Available" : "Not Available"
              }</p>
              <p><strong>Offer:</strong> ${offer}% For Booking Right Now</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${userEmail}</p>
              <p><strong>Image:</strong> ${image}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Check In Date:</strong> ${date}</p>
              <p><strong>Check In Date:</strong> ${newId}</p>
          </div>
      `;
    Swal.fire({
      title: "Confirm Booking",
      html: modalContent,
      showCancelButton: true,
      confirmButtonText: "Book Now",
      cancelButtonText: "Cancel",
      icon: "info",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch("https://laarisa-booking-server-site.vercel.app/bookedRooms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        })
          .then((response) => {
            if (response.ok) {
              return fetch(`https://laarisa-booking-server-site.vercel.app/updateAvailability/${_id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ _id, newId }),
              });
            }
            throw new Error("Network response was not ok.");
          })
          .then((data) => {
            console.log("Room data saved successfully:", data);
            navigate(location?.state ? location.state : "/myBookings");
            Swal.fire(
              "You Have Booked This Room Successfully!! <br> Enjoy Our Service and Give us a feedback"
            );
          })
          .catch((error) => {
            // Handle errors
            console.error("Error saving room data:", error);
            Swal.fire(
              "Failed to book the room. Please try again later.",
              "",
              "error"
            );
          });
      }
    });
  };

  // Showing Reviews
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://laarisa-booking-server-site.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // console.log(reviews[0].newId)

  console.log(_id);
  // const newReviews = reviews.find((r) => r.newId === _id);
  const roomReviews = reviews.filter((review) => review.newId === _id);
  // setReviews(newReviews);
  // console.log(newReviews)
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };
  const colors = [
    "bg-gradient-to-r from-red-200 via-yellow-200 to-pink-200",
    "bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200",
    "bg-gradient-to-r from-blue-200 via-violet-200 to-green-200",
  ];
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <div>
        <h1 className="text-3xl font-bold text-center my-10">
          Details And Review About This Room
        </h1>
      </div>
      <div>
        <img className="h-96 w-96" src={image} alt="" />
      </div>
      <div className="space-y-3 w-full lg:w-1/2 text-center bg-gray-200 p-5 mt-20">
        <p className="text lg:px-20 md:px-5 px-2 gray-600">
          <strong className="text-2xl font-bold">
            Description <br />
          </strong>
          {roomDesc}
        </p>
        <p className="text-2xl font-bold text gray-600">Room Size:{size} Sq</p>
        <p className="text-2xl font-bold text gray-600">Price:{price}$</p>
        <div className="text-2xl font-bold text gray-600">
          {availability ? <p className="text-green-700">Available</p> : ""}
        </div>
        <p className="text-2xl font-bold text gray-600">
          Offer:{offer}% For Booking Right Now
        </p>

        {user ? (
          <div className="bg-gray-100">
            <h1 className="text-2xl font-bold text-blue-500  text-center my-10 ">
              Fill The Form to Book This Room{" "}
            </h1>
            <form onSubmit={handleBooking}>
              <div className="form-control animate__animated animate__fadeInDown">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="animate__animated animate__fadeInDown input input-bordered"
                  required
                />
              </div>
              <div className="form-control animate__animated animate__fadeInDown">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  readOnly
                  placeholder="Email"
                  className="animate__animated animate__fadeInDown input input-bordered"
                  required
                />
              </div>
              <div className="form-control animate__animated animate__fadeInDown">
                <label className="label">
                  <span className="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your Phone Number"
                  className="animate__animated animate__fadeInDown input input-bordered"
                  required
                />
              </div>
              <div className="form-control animate__animated animate__fadeInDown">
                <label className="label">
                  <span className="label-text">Check In Date</span>
                </label>
                <input
                  type="date"
                  name="checkInDate"
                  min={new Date().toISOString().split("T")[0]}
                  className="animate__animated animate__fadeInDown input input-bordered"
                  required
                />
              </div>
              <button
                type="submit"
                className="my-5 bg-btn p-2 text-white font-bold rounded  hover:bg-btn-hover"
              >
                Book Now
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-center text-green-800">
              Login To Book This Room
            </h1>
          </div>
        )}
        <div className="my-5 bg-green-200">
          <div className="my-5">
            <div className="my-10">
              <h1 className="font-bold text-3xl text-center mt-5">
              What Our User Says About This Room
              </h1>
              <p className="text-center my-5">
                Discover what our visitors love about This Room! Read their
                testimonials and explore the essence of their experiences with
                our services.
              </p>
              <p>
                {
                  roomReviews.length ? <h1 className="font-bold text-3xl">Total Reviews For This Page: {roomReviews.length}</h1> : <h1>No Reviews Available</h1>
                }
              </p>
            </div>
            {
              roomReviews.length > 1 ? <div>
              <Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                spaceBetween={10}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{ delay: 4000 }}
                loop={true}
                modules={[Pagination]}
                className="h-80 rounded bg-gray-200"
              >
                {roomReviews.map((review, index) => (
                  <SwiperSlide
                    className={`rounded-xl w-full shadow-lg p-5 ${
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
            </div> : <h1 className="py-4 font-bold text-3xl text-red-500">No Reviews Available For This Room</h1>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
