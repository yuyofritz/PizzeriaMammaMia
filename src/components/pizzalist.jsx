import React from "react";

const pizzas = [
    {
        id: 1,
        name: "Margarita",
        price: 8500,
        img: "src/assets/img/margarita.jpg",
    },
    {
        id: 2,
        name: "Pepperoni",
        price: 9500,
        img: "src/assets/img/pepperoni.jpg",
    },
    {
        id: 3,
        name: "Cuatro Quesos",
        price: 10500,
        img: "src/assets/img/4quesos.jpeg",
    },
    {
        id: 4,
        name: "Hawaiana",
        price: 9800,
        img: "src/assets/img/hawai.jpg",
    },
    {
        id: 5,
        name: "Napolitana",
        price: 8900,
        img: "src/assets/img/napolitana.jpg",
    },
    {
        id: 6,
        name: "Vegana",
        price: 11000,
        img: "src/assets/img/vagan.jpg",
    },
    {
        id: 7,
        name: "BBQ Pollo",
        price: 11500,
        img: "src/assets/img/bbqpollo.jpg",
    },
    {
        id: 8,
        name: "Mediterránea",
        price: 12000,
        img: "src/assets/img/mediterranea.jpeg",
    },
];

const PizzaList = () => {
    return (
        <div className="container py-5">
            <div className="row g-4">
                {pizzas.map((pizza) => (
                    <div className="col-12 col-md-6 col-lg-3" key={pizza.id}>
                        <div className="card h-100 shadow-sm">
                            <img
                                src={pizza.img}
                                className="card-img-top"
                                alt={pizza.name}
                                style={{ height: "180px", objectFit: "cover" }}
                            />
                            <div className="card-body text-center">
                                <h5 className="card-title">{pizza.name}</h5>
                                <p className="card-text">${pizza.price}</p>
                                <button className="btn btn-primary">Ordenar</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PizzaList;
