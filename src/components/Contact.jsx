function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>

      <p>
        I'm currently open to freelance opportunities, internships, and
        collaboration on exciting projects. Feel free to reach out.
      </p>

      <div className="contact-info">
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:yourmail@gmail.com">amandeep1892@gmail.com</a>
        </div>

        <div className="contact-card">
          <h3>GitHub</h3>
          <a
            href="https://github.com/dev-deepaman"
            target="_blank"
            rel="noreferrer"
          >
            github.com/dev-deepaman
          </a>
        </div>

        <div className="contact-card">
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            linkedin.com/in/amandeep-singh
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
