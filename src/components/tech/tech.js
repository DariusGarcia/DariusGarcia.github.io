import * as Scroll from "react-scroll";
import "./tech.scss";

let Element = Scroll.Element;

function Tech() {
  return (
    <Element name="tech">
      <div className="tech-container">
        <header>
          <h1 id="technologies"> Dev Tools </h1>
        </header>
        <section className="tech-stack">
          <article className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            <h4>React</h4>
          </article>
          <article className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <h4>Javascript</h4>
          </article>
          <article className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            <h4>HTML5</h4>
          </article>
          <article className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
            <h4>CSS/SCSS</h4>{" "}
          </article>
          <article className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />

            <h4>Git</h4>
          </article>
          <article className="tech-icons">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" />
            <h4>GraphQL</h4>
          </article>
        </section>
      </div>
    </Element>
  );
}

export default Tech;
