function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger px-3">
            <a className="navbar-brand fw-bold" href="#">
                Pizzería Mamma Mia!
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav gap-3">
                    <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Register</a></li>
                    <li className="nav-item fw-bold text-warning">Total: $25.000</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
