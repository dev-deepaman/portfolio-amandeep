import profileImg from "../assets/Aman.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">I am Amandeep Singh</span>

          <h1>
            Web Developer <br />+ React Developer
          </h1>

          <p>
            I create modern, responsive and user-friendly websites with React,
            JavaScript and modern web technologies.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Download CV</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={profileImg} alt="Amandeep" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
