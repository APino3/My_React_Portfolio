import "./style.css";

export default function Project({ name, languages, link }) {
  return (
    <div id="project">
      <h4>{name}</h4>
      <ul>
        {languages.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
      <p>Test</p>
      <a href={link}>{name}</a>
    </div>
  );
}
