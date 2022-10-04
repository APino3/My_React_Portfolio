import Project from "../Project";
import "./style.css";

export default function Portfolio(props) {
  const listOfProjects = [
    {
      name: "Weather",
      languages: ["Javascript", "HTML"],
      link: "https://github.com",
    },
    { name: "Regex", languages: ["CSS", "HTML"], link: "https://github.com" },
    {
      name: "Resume",
      languages: ["Heroku", "HTML"],
      link: "https://github.com",
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
