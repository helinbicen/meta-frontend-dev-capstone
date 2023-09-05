import HeroImage from "../assets/HeroImage.jpeg";
import Button from "./Button";

function Hero() {
  return (
    <section id="about" className="bg-green">
      <div className="content-wrapper">
        <div className="hero-content">
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Chicago</h2>
          <p className="description">
            Nestled in the heart of bustling Chicago, Little Lemon is where
            modern flair meets cozy nostalgia. Our diverse, artisanal menu,
            featuring delectable bruschettas, succulent burgers, and refreshing
            Greek salads, is a testament to our belief that food is an art.
          </p>
          <Button text="Reserve a table" linkTo="#reservations" />
        </div>
        <div className="hero-image">
          <img src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
