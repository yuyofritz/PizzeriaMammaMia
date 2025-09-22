import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <div className="card shadow">
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p>Ingredientes: {ingredients.join(", ")}</p>
                <p className="fw-bold">Precio: ${price.toLocaleString("es-CL")}</p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary">Ver más 👀</button>
                    <button className="btn btn-success">Añadir 🛒</button>
                </div>
            </div>
        </div>
    );
};

export default CardPizza;
