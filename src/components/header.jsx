import React from "react";
import headerImage from "../assets/img/Header.jpg";


const Header = () => {
    return (
        <header style={{ position: "relative", width: "100%", height: "300px" }}>
            {/* Imagen de fondo */}
            <img
                src={headerImage}
                alt="Header"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            {/* Texto encima de la imagen */}
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    textAlign: "center",
                    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
                }}
            >
                <h1>Bienvenido a mi sitio</h1>
                <p>Disfruta de nuestra experiencia</p>
            </div>
        </header>
    );
};

export default Header;

