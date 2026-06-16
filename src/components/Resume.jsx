import { experienceData, educationData } from "../data/resume";

function Resume() {
  return (
    <section className="resume">
      <div className="resume-column">
        <h2 className="resume-heading">🏅 My Experience</h2>

        {experienceData.map((item, index) => (
          <div className="resume-card" key={index}>
            <span>{item.year}</span>

            <h3>{item.title}</h3>

            <p>{item.company}</p>
          </div>
        ))}
      </div>

      <div className="resume-column">
        <h2 className="resume-heading">🎓 My Education</h2>

        {educationData.map((item, index) => (
          <div className="resume-card" key={index}>
            <span>{item.year}</span>

            <h3>{item.title}</h3>

            <p>{item.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Resume;
