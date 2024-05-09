import  { useState } from 'react';
import img from '../../assets/images/img1.png'

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can implement the logic to submit the email to your backend or any newsletter service
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
  };
  
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg mx-auto md:w-full w-full lg:w-4/6 my-10  ">
      <div>
            <img src={img} className='rounded' alt="" />
      </div>
      <div className='flex flex-col lg:text-left text-center lg:flex-row mt-5 '>
        <p>LaRiSa is a haven of personalized hospitality, unwaveringly committed to guest delight. Each property seamlessly fuses luxury with nature, offering award-winning stays in handpicked locations enriched with bespoke experiences. With a presence in Manali, Mussoorie, Shimla, and Goa (Ashwem and Morjim), LaRiSa is expanding its horizons.</p>
        <p>
        Our future includes LaRiSa Homes, a collection of curated luxury vacation rentals in Goa, and new properties in Himachal Pradesh and Delhi NCR. When we say Youre Welcome, it s not just a tagline; it s a heartfelt invitation to experience unparalleled beauty and a genuine connection to nature. We hope you ll accept.
        </p>
      </div>
      <h2 className="text-2xl font-semibold mt-5 mb-4">Subscribe to Our Newsletter</h2>
      <p className="mb-4">Be the first to receive updates, deals, and exclusive offers straight to your inbox!</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          placeholder="Your Email Address"
          className="w-full sm:w-auto bg-white border border-gray-300 rounded-lg px-4 py-2 mr-0 sm:mr-2 mb-2 sm:mb-0"
        />
        <button
          type="submit"
          className="ml-5 btn btn-primary border-btn-border hover:bg-btn-hover hover:border-btn-hover bg-btn transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
