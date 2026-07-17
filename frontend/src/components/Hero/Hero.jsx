import "./Hero.css";
import Button from "../Button/Button";
import Container from "../Container/Container";

function Hero({ title, subtitle, description, image}) {
    return (
        <section className="hero">
            <Container>
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="hero-subtitle">
                            {subtitle}
                        </p>
                        <h1 className="hero-title">
                            {title}
                        </h1>
                        <p className="hero-description">
                            {description}
                        </p>
                        <div className="hero-buttons">
                            <Button variant="primary">
                                Explore Portfolio
                            </Button>
                            <Button variant="secondary">
                                Book Consultation
                            </Button>
                        </div>
                    </div>
                    <div classname="hero-image">
                        <img src={image} alt="Luxury Interior Design" />
                    </div>
                </div>
            </Container>
        </section>
    );
}
export default Hero;