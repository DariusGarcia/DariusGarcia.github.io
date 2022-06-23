import "./intro.scss";
import * as Scroll from "react-scroll";

let Element = Scroll.Element;

function Intro() {
  return (
    <Element name="intro">
    <div className="intro-container" name="intro">
      <header className="intro-header">
        <h2 id="hey">Hey! I'm </h2>
        <h1 id="name">Darius Garcia.</h1>
        <p className="intro-message">
          Passionate self-starter interested in front-end web development. Looking
          to leverage my Business Economic analytical skills to not only be a
          problem solver, but also a problem finder.
        </p>
      </header>
      
    </div>
    </Element>
  );
}

export default Intro;
