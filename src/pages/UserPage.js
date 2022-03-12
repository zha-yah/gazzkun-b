import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Userinfo from "../components/Userpage/Userinfo/Userinfo";
import Mylisting from "../components/Userpage/Mylisting/Mylisting";
import Myorders from "../components/Userpage/Myorders/Myorders";

const UserPage = () => {
    return(
        <>
        <Navbar />
        <Userinfo/>
        <Mylisting/>
        <Myorders/>
        <Footer />
        {/* THE PREVIOUS IMPLEMENTATION BY Zak
            <div>
                <h1>Seller Page</h1>
                    <br />
                    <ul>
                    <li>
                        IN THE MEANTIME IGNORE THESE Endpoint to route to Home component
                        <Link to="/Add">Add</Link>
                    </li>
                    <li>
                        Endpoint to route to About component
                        <Link to="/Edit">Edit</Link>
                    </li>
                    <li>
                        Endpoint to route to Contact Us component 
                        <Link to="/Delete">Delete</Link>
                    </li>
                </ul>
            </div>
        */} 
        </>
);
};

export default UserPage