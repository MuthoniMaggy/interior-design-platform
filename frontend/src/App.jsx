import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import heroImage from "./assets/hero.png";
function App(){
  return(
    <>
    <Navbar />
   
      <Hero
      subtitle="PREMIUM INTERIOR DESIGN"
      title="Rooms with Limitless Creativity."
      description="Luxury interior design crafted for modern homes, offices and commercial spaces with timeless elegance."
      image={heroImage}
      />
    </>
  );
}
export default App;