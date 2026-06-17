import { contactInfo } from "../data/contact";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-form-wrapper">
        <h2>Let's work together!</h2>

        <p>
          I design and develop modern web applications with clean code and great
          user experience.
        </p>

        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" />

            <input type="text" placeholder="Last Name" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email Address" />

            <input type="text" placeholder="Phone Number" />
          </div>

          <select>
            <option>Select an Option</option>

            <option>Website Development</option>

            <option>React Project</option>

            <option>Portfolio Website</option>
          </select>

          <textarea rows="7" placeholder="Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-info">
        {contactInfo.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="contact-item">
              <div className="contact-icon">
                <Icon />
              </div>

              <div>
                <span>{item.title}</span>

                <h4>{item.value}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
