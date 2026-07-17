import "./Navbar.css";
import Button from "../Button/Button";
import Container from "../Container/Container";

const navLinks = [
    "Home",
    "Services",
    "Portfolio",
    "About",
    "Contact",
];

function Navbar(){
    return(
        <nav className="navbar">
            <Container>
             <div className="navbar-content" >
                <div className="logo">
                     ∞ Infinite Spaces
                </div>
                <ul className="nav-links">
                    {navLinks.map((link) => (
                        <li key={link}>
                            <a href="#">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
                <Button variant="primary">
                    Book Consultation
                </Button>
             </div>
            </Container>
        </nav>
    );
}
export default Navbar;