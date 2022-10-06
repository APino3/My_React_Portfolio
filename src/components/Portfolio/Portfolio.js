import Project from "../Project";
import "./style.css";

export default function Portfolio(props) {
  const listOfProjects = [
    {
      name: "Weather",
      languages: ["Javascript", "HTML"],
      link: "https://apino3.github.io/weather-dash/",
    },
    {
      name: "Run Buddy",
      languages: ["CSS", "HTML"],
      link: "https://apino3.github.io/run-buddy/",
    },
    {
      name: "Code Quiz",
      languages: ["HTML", "CSS"],
      link: "https://apino3.github.io/Code_Quiz/",
    },
  ];
  return (
    <div>
      Portfolio
      {listOfProjects.map((x) => (
        <Project name={x.name} languages={x.languages} link={x.link} />
      ))}
    </div>
  );
}
