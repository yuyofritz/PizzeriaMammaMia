import React from "react";
import headerImage from "../assets/img/Header.jpg"; 

const Header = () => {
    return (
        <div
            className="text-center bg-dark text-white py-5"
            style={{
                backgroundImage: `url(${headerImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h1>¡Pizzería Mamma Mia!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
    );
};

export default Header;

