import { Card, Button, ListGroup } from 'react-bootstrap';

const CardPizza = ({ name, price, ingredients, img }) => {
    return (
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item><strong>Ingredientes:</strong></ListGroup.Item>
                    {ingredients.map((ing, index) => (
                        <ListGroup.Item key={index}>🍕 {ing}</ListGroup.Item>
                    ))}
                </ListGroup>
                <Card.Text className="text-center mt-3">
                    <h4>${price.toLocaleString('es-CL')}</h4>
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button variant="primary">Ver Más 👀</Button>
                    <Button variant="warning">Añadir 🛒</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPizza;