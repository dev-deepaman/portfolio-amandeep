import profileImg from "../assets/Aman.jpg";
import { FaDownload } from "react-icons/fa";

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
            <a
              href="/Resume-Amandeep_singh.pdf"
              download
              className="download-btn"
            >
              Download CV
              <FaDownload />
            </a>
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
