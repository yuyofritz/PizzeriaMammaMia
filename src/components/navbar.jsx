
import { Navbar as BSNavbar, Button, Container } from 'react-bootstrap';

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <BSNavbar bg="dark" variant="dark">
            <Container>
                <BSNavbar.Brand>Pizzería Mamma Mia!</BSNavbar.Brand>
                <BSNavbar.Toggle />
                <BSNavbar.Collapse className="justify-content-end">
                    <Button variant="outline-light" className="me-2">🍕 Home</Button>
                    {token ? (
                        <>
                            <Button variant="outline-light" className="me-2">🔓 Profile</Button>
                            <Button variant="outline-light" className="me-2">🔒 Logout</Button>
                        </>
                    ) : (
                        <>
                            <Button variant="outline-light" className="me-2">🔐 Login</Button>
                            <Button variant="outline-light" className="me-2">🔐 Register</Button>
                        </>
                    )}
                    <Button variant="outline-light">🛒 Total: ${total.toLocaleString('es-CL')}</Button>
                </BSNavbar.Collapse>
            </Container>
        </BSNavbar>
    );
};

export default Navbar;