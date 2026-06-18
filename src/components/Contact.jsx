import { useRef, useState } from "react";
import { contactInfo } from "../data/contact";
import emailjs from "@emailjs/browser";

function Contact() {
  const ref = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_nvlxtk8",
        "template_h9tfrvb",
        ref.current,
        "o9ehbIkeBktmH6-sO",
      )
      .then(
        () => {
          ref.current.reset();
          setMessageSent(true);
          setLoading(false);

          setTimeout(() => {
            setMessageSent(false);
          }, 3000);
        },
        (error) => {
          setLoading(false);

          console.log(error);
        },
      );
  };
  return (
    <section className="contact-section" id="contact">
      <div className="contact-form-wrapper">
        <h2>Let's work together!</h2>

        <p>
          I design and develop modern web applications with clean code and great
          user experience.
        </p>

        <form className="contact-form" ref={ref} onSubmit={sendEmail}>
          <div className="form-row">
            <input
              type="text"
              placeholder="First Name"
              name="first_name"
              required
            />

            <input type="text" placeholder="Last Name" name="last_name" />
          </div>

          <div className="form-row">
            <input
              type="email"
              placeholder="Email Address"
              name="user_email"
              required
            />

            <input type="number" placeholder="Phone Number" name="user_phone" />
          </div>

          <select name="service">
            <option>Select an Option</option>

            <option>Website Development</option>

            <option>React Project</option>

            <option>Portfolio Website</option>
          </select>

          <textarea
            rows="7"
            className="mb-0 pb-0"
            placeholder="Message"
            name="message"
            required
          ></textarea>
          {messageSent && (
            <div className="text-success">Message sent successfully!</div>
          )}
          <button type="submit" className="mt-3 ">
            {loading ? "Sending..." : "Send Message"}
          </button>
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
