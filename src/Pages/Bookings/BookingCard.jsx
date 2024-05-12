const BookingCard = ({ book,cancelBooking }) => {
  const { _id, name, offer, roomDesc, image, date, phone, price, size } = book;



  return (
    <div className="flex flex-col justify-center items-center my-10 border-2 py-5 shadow-xl px-2">
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
        <div className="text-center">
          <button
            onClick={() => {
              cancelBooking(_id);
            }}
            className="p-2 bg-btn hover:bg-btn-hover rounded font-bold text-white"
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
