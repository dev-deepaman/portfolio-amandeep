import { skills } from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <h2>My Skills</h2>

        <p>Technologies and tools I use to build modern web applications.</p>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div key={index} className="skill-item">
              <div className="skill-card">
                <Icon className="skill-icon" />

                <h3>{skill.percentage}</h3>
              </div>

              <p>{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
