import "./Navbar.css";
import Button from "../Button/Button";
import Container from "../Container/Container";
import { Link } from "react-router-dom";

const navLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Services",
        href: "/#services",
    },
    {
        label: "Portfolio",
        href: "/#portfolio",
    },
    {
        label: "About",
        href: "/#about",
    },
    {
        label: "Contact",
        href: "/#contact",
    },
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
                        <li key={link.label}>
                           <a href={link.href}>
                             {link.label}
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