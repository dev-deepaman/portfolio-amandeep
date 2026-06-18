import { projects } from "../data/projects";

function Recentwork() {
  return (
    <section id="projects" className="portfolio">
      <div className="portfolio-header">
        <h2>My Recent Works</h2>

        <p>
          We put your ideas and wishes into the form of a unique web project
          that inspires both you and your customers.
        </p>
      </div>

      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.image} alt={project.title} />

            <div className="project-overlay">
              <div>
                <h3>{project.title}</h3>

                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recentwork;
