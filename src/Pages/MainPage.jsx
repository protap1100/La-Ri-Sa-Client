import { Outlet } from "react-router-dom";
import Navbar from "./StaticPage/Navbar";
import Footer from "./StaticPage/Footer";

const MainPage = () => {
    return (
        <div className="container mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainPage;