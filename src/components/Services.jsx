import { services } from "../data/services";

function Services() {
  return (
    <section id="services" className="services">
      <div className="services-header">
        <h2>My Quality Services</h2>

        <p>
          We put your ideas and wishes into the form of a unique web project
          that inspires both you and your customers.
        </p>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <div className="service-left">
              <span>{service.id}</span>

              <h3>{service.title}</h3>
            </div>

            <div className="service-center">
              <p>{service.description}</p>
            </div>

            <div className="service-right">→</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
