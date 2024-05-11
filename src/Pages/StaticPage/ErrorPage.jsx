import { Link } from 'react-router-dom';
import ErrorPageImg from '../../assets/404_page_cover.jpg'

const ErrorPage = () => {
    return (
       <div className='flex gap-20 justify-center items-center h-screen flex-row-reverse'>
         <div className="flex flex-col justify-center items-center ">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl text-center text-red-500 font-bold mb-5">404 - Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-8">The page you are looking for does not exist.</p>
            <div className="flex items-center gap-4">
                <Link to="/" className="btn bg-btn text-white hover:bg-btn-hover">
                    Go to Home
                </Link>
                <Link to="/contact" className="btn bg-red-500 text-white hover:bg-btn-hover">
                    Contact Us
                </Link>
            </div>
        </div>
        <div>
            <img src={ErrorPageImg} className='h-96 w-84 rounded-xl' alt="Image" />
        </div>
       </div>
    );
};

export default ErrorPage;
