import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";


const Main = () => {
    return (
        <div className="bg-gradient-to-b from-[#AA076B] to-[#AA076B] via-[#61045F]">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;