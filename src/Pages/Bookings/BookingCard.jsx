import Aos from "aos";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Navigate} from "react-router-dom";
import Swal from "sweetalert2";
import "aos/dist/aos.css";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BookingCard = ({ book, cancelBooking, user }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  function openModal2() {
    setUpdateModalOpen(true);
  }
  function afterOpenModal2() {}
  function closeModal2() {
    setUpdateModalOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  // const location = useLocation();
  // const navigate = useNavigate();

  const { _id, name, offer, roomDesc, image, date, phone, price, size, newId } =
    book;

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const experience = form.experience.value;
    const username = form.username.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const review = { experience, username, rating, time, newId };
    console.log(review);
    fetch("https://laarisa-booking-server-site.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: "Thank You For Adding Reviews",
            icon: "success",
          });
          <Navigate state={location.pathname} to="/"></Navigate>;
        }
      });
  };

  const handleUpdateDate = (event) => {
    event.preventDefault();
    const form = event.target;
    const newTime = form.newDate.value;
    const updatedDate = {newTime};
    // console.log(newTime)
    fetch(`https://laarisa-booking-server-site.vercel.app/updateDate/${_id}`,{
      method:'PUT',
      headers: {
          'content-type': 'application/json'
      },
      body: JSON.stringify(updatedDate)
  })
  .then(res=> res.json())
  .then(data=>{
      console.log(data);
      if (data.modifiedCount > 0) {
          Swal.fire({
              title: 'Success!',
              text: 'Date Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Cool'
          })
      }
      setTimeout(() => {
        window.location.reload();
      }, 2000);
  })



  };

  return (
    <div
      data-aos="fade-right"
      className="flex bg-gradient-to-r from-red-100 via-yellow-100 to-pink-100 flex-col justify-center items-center my-10 border-2 py-5 shadow-xl px-2"
    >
      <h1></h1>
      <div className="space-y-2 flex flex-col justify-center items-center">
        <img className="w-96 h-72 object-center" src={image} alt="" />
        <h1>
          <strong>Client Name</strong> : {name}
        </h1>
        <h1 className="text-center lg:px-10 px-2 h-60 md-60  lg:h-40">
          <strong>About This Room</strong> : {roomDesc}
        </h1>
        <h1>
          <strong>Date:</strong> {date}
        </h1>
        <h1 className="font-bold">{offer}% Off For Your Booking</h1>
        <h1>
          <strong>Phone:</strong> : {phone}
        </h1>
        <h1>
          <strong>Price:</strong> : {price}$(per/night)
        </h1>
        <h1>
          <strong>Room Size: </strong>
          {size}Sq
        </h1>
        <div className="text-center flex gap-10">
          <button
            onClick={openModal2}
            className="p-2 bg-blue-500 hover:bg-blue-950 rounded font-bold text-white"
          >
            Update Date
          </button>
          <button
            onClick={() => {
              cancelBooking(_id, newId, date);
            }}
            className="p-2 bg-btn hover:bg-btn-hover rounded font-bold text-white"
          >
            Cancel Booking
          </button>
          <div>
            <button
              className="p-2 bg-green-500 hover:bg-green-950 rounded font-bold text-white"
              onClick={openModal}
            >
              Give Review
            </button>
            <Modal
              ariaHideApp={false}
              isOpen={updateModalOpen}
              onAfterOpen={afterOpenModal2}
              onRequestClose={closeModal2}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <div className="p-6">
                <form onSubmit={handleUpdateDate}>
                  <label className="block space-y-4">
                    <span className="mb-1 font-bold">Enter New Date</span>
                    <input
                      type="date"
                      name="newDate"
                      className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                    />
                  </label>
                  <div className="text-center mt-5">
                  <button className="p-2 bg-green-500 hover:bg-green-950 rounded font-bold text-white">Update</button>
                  </div>
                </form>
              </div>
            </Modal>
            <Modal
              ariaHideApp={false}
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h1 className="text-xl font-bold text-green-600 my-5">
                Give Review About This Room
              </h1>
              <div>
                <form onSubmit={handleReview} className="space-y-4">
                  <label className="block">
                    <span className="mb-1">Your Experience</span>
                    <input
                      type="textarea"
                      name="experience"
                      placeholder="Your Experience"
                      className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1">Username</span>
                    <input
                      type="text"
                      name="username"
                      defaultValue={user.email}
                      readOnly
                      placeholder="Your Name"
                      className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1">Rating</span>
                    <input
                      type="number"
                      min={1}
                      max={5}
                      name="rating"
                      placeholder="Rating"
                      className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-1">Reviewed On</span>
                    <input
                      type="datetime-local"
                      name="time"
                      defaultValue={new Date().toISOString().slice(0, 16)} // Set current date and time as default value
                      disabled // Disable the input field to prevent user input
                      className="block w-full h-10 rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 bg-blue-100"
                    />
                  </label>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="p-2 bg-green-500 text-white hover:bg-btn-hover rounded font-bold "
                    >
                      Post
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-5 text-center">
                <button
                  className="p-2 bg-btn text-white hover:bg-btn-hover rounded font-bold"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
