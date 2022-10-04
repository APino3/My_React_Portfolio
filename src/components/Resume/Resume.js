import "./style.css";
import resume from "../../resume.pdf";

export default function Resume(props) {
  return (
    <div>
      <h1>Resume</h1>
      <a href={resume} target="_blank" rel="noreferrer" download>
        Resume
      </a>
    </div>
  );
}
