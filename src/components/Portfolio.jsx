import { projects } from "../data/projects";

function Portfolio() {
  return (
    <section id="projects" className="portfolio">
      <div className="portfolio-header">
        <h2>My Recent Works</h2>

        <p>
          A collection of projects showcasing my frontend development skills.
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

              <span>↗</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
