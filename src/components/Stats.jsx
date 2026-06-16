import { stats } from "../data/stats";

function Stats() {
  return (
    <section className="stats">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <h2>{item.number}</h2>
          <p>{item.title}</p>
        </div>
      ))}
    </section>
  );
}

export default Stats;
