import "./style.css";

export default function AboutMe(props) {
  return (
    <div class="row">
      <div class="col s12 m6">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">About Me</span>
            <p>
              Albalicia has earned her Coding Boot-camp Certification from the
              University of Texas at Austin. Learning to code has become more
              than a passion but a new career path. Currently, Albalicia is
              seeking a full-time position as an entry-level web developer. Her
              strangths include the working with HTML, CSS, and Javascript.
              Working on the front end of an application and debugging code has
              quickly become an acquired skill. While the front-end is a
              strength, working on the back-end is still an area for growth and
              progress.
            </p>
          </div>
          <div class="card-action">
            <a href="#">Resume</a>
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
    </div>
  );
}
