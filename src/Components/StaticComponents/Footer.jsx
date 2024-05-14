import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
      <div className="bg-gray-800 text-white py-10 rounded-xl">
        <footer className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h2 className="font-medium">Explore Rooms</h2>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#">View Rooms</a>
                <a href="#">Room Types</a>
                <a href="#">Special Offers</a>
                <a href="#">Book Now</a>
              </div>
            </div>
  
            <div className="space-y-4">
              <h2 className="font-medium">Discover Destinations</h2>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#">Popular Destinations</a>
                <a href="#">Local Attractions</a>
                <a href="#">Guided Tours</a>
                <a href="#">Book Activities</a>
              </div>
            </div>
  
            <div className="space-y-4">
              <h2 className="font-medium">About Us</h2>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#">Our Story</a>
                <a href="#">Team Members</a>
                <a href="#">Events & News</a>
                <a href="#">Customer Reviews</a>
              </div>
            </div>
  
            <div className="space-y-4">
              <h2 className="font-medium">Connect With Us</h2>
              <div className="flex flex-col space-y-2 text-sm">
                <a href="#">Contact Us</a>
                <a href="#">FAQs</a>
                <a href="#">Subscribe to Newsletter</a>
                <a href="#">Follow Us on Social Media</a>
              </div>
            </div>
          </div>

          <div className="rounded-xl text-center p-9">
                <div className="flex justify-center mt-5 gap-5">  
                    <a href="#"><i className="text-3xl"><SocialIcon url="https://facebook.com" /> </i></a>
                    <a href="#"><i className="text-3xl"><SocialIcon url="https://instagram.com" /></i></a>
                    <a href="#"><i className="text-3xl"><SocialIcon url="https://twitter.com" /></i></a>
                    <a href="#"><i className="text-3xl"><SocialIcon url="https://github.com" /></i></a>
                </div>
            </div>
          <div className="flex items-center justify-center  text-sm">
            <span>&copy; {new Date().getFullYear()} Wanderlust Booking. All Rights Reserved.</span>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  