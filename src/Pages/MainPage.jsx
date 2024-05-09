import { Outlet } from "react-router-dom";
import Navbar from "./StaticPage/Navbar";
import Footer from "./StaticPage/Footer";
import TopBar from "../Components/StaticComponents/TopBar";

const MainPage = () => {
    return (
      <div>
            <TopBar></TopBar>
            <div className="container mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
      </div>
    );
};

export default MainPage;