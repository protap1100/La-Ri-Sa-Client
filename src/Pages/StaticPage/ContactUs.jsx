// import { Helmet } from "react-helmet-async";
import Aos from 'aos';
import "aos/dist/aos.css";
import image1 from '../../assets/images/icons/Group 1171275317.png'
import image2 from '../../assets/images/icons/Group 1171275318.png'
import image3 from '../../assets/images/icons/Group 1171275321.png'
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const ContactUs = () => {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
        });
      }, []);


    return (
        <section className="container mx-auto my-5 bg-gradient-to-r from-indigo-200 from-10% via-sky-200 via-30% to-emerald-200 to-90% rounded-xl ">
             <Helmet>
                <link rel="icon" type="image/png" href="/src/assets/images/titleIcon/contact.png" />
                <title>Contact Us</title>
            </Helmet>
            <div className="border-dashed border mt-32 border-[#13131833] lg:mx-0 mx-2"></div>
            <div className="text-center px-2 lg:px-0" data-aos='fade-right'>
                <h1 className="text-4xl font-extrabold mt-8">Get in Touch</h1>
                <p className="mt-6 px-2 lg:px-[370px]">Get in touch with us! Fill out the form below for personalized assistance and quick responses to your inquiries</p>
            </div>
            <div className="border-dashed border mt-8 border-[#13131833] lg:mx-0 mx-2"></div>

            <div className="mt-8 lg:flex px-5" data-aos='fade-right'>
               <div className="flex-grow-0 p-12 border border-[#1313181A] space-y-2 rounded-2xl" data-aos='fade-right'>
                    <div className="bg-[#bced6e1a] rounded-xl py-8 pr-40 pl-6" data-aos='fade-right'>
                        <img src={image1} alt=""/>
                        <p className="mt-10">Phone Number</p>
                        <h1 className="mt-2 font-extrabold">+8801957290864</h1>
                    </div>
                    <div className="bg-[#fddb5f1a] rounded-xl py-8 pr-40 pl-6" data-aos='fade-right'>
                        <img src={image2} alt=""/>
                        <p className="mt-10">Email</p>
                        <h1 className="mt-2 font-extrabold">protapb23@gmail.com</h1>
                    </div>
                    <div className="bg-[#629cf31a] rounded-xl py-8 pr-40 pl-6" data-aos='fade-right'>
                        <img src={image3} alt=""/>
                        <p className="mt-10">Location</p>
                        <h1 className="mt-2 font-extrabold">Kumkumari,Ashuila,Savar,Dhaka 1353</h1>
                    </div>
               </div>
               <div className="flex-grow" data-aos='fade-right'>
                    <div className="grid gap-6 mb-6 grid-cols-1 lg:grid-cols-2 md:grid-cols-2 px-10" >
                        <div className=" col-span-2 lg:col-span-1" data-aos='fade-right'>
                            <label className="font-bold text-xl">First name</label>
                            <input type="text" className="mt-2 border border-[#1313181A] text-sm rounded-lg  block w-full p-5 " placeholder="Enter Your Full Name" required />
                        </div>
                       <div className="col-span-2 lg:col-span-1" data-aos='fade-right'>
                            <label className="font-bold text-xl">Your Email</label>
                            <input type="text" className="mt-2 border border-[#1313181A] text-sm rounded-lg  block w-full p-5 " placeholder="Enter Your Email" required /> 
                        </div>
                       <div className=" col-span-2 lg:col-span-1" data-aos='fade-right'>
                            <label className="font-bold text-xl">Subject</label>
                            <input type="text" className="mt-2 border border-[#1313181A] text-sm rounded-lg  block w-full p-5 " placeholder="Enter Your Subject" required /> 
                        </div> 
                       <div className=" col-span-2 lg:col-span-1" data-aos='fade-right'>
                            <label className="font-bold text-xl">Phone</label>
                            <input type="text" className="mt-2 border border-[#1313181A] text-sm rounded-lg  block w-full p-5 " placeholder="Enter Your Phone" required /> 
                        </div>
                       <div className="col-span-2" data-aos='fade-right'>
                        <label className="font-bold text-xl">Your Message</label>
                        <textarea className="mt-2 border border-[#1313181A] text-sm rounded-lg p-5 w-full lg:h-[400px]" placeholder="Your Message" ></textarea>
                       </div>
                    </div>
                    <div className="px-10" data-aos='fade-right'>
                        <button className="btn btn-primary w-full hover:bg-orange-950 bg-red-500 border-none text-xl font-bold" >Send Message</button>
                    </div>
                    </div>
                </div>
        </section>
    );
};

export default ContactUs;