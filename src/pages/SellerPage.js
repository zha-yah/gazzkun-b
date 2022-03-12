import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const SellerPage = () => {
    return(
        <><>
            <Navbar />
        </><div>
                <h1>Seller Page</h1>
                <br />
                <ul>
                    <li>
                        {/*  IN THE MEANTIME IGNORE THESE Endpoint to route to Home component */}
                        <Link to="/">Add</Link>
                    </li>
                    <li>
                        {/* Endpoint to route to About component */}
                        <Link to="/about">Edit</Link>
                    </li>
                    <li>
                        {/* Endpoint to route to Contact Us component */}
                        <Link to="/contactus">Delete</Link>
                    </li>
                </ul>
            </div></>
);
};

export default SellerPage