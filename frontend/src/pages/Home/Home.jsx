import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import FeaturedProjects from "../../components/FeaturedProjects/FeaturedProjects";
import heroImage from "../../assets/hero.png";

function Home() {
    return(
        <>
        <Navbar />
        <Hero
        subtitle="PREMIUM INTERIOR DESIGN"
        title="Rooms with Limitless Creativity."
        description="Luxury interior design crafted for modern homes, offices and commercial spaces with timeless elegance."
        image={heroImage}
        />
        <FeaturedProjects />
        </>
    );
}
export default Home;