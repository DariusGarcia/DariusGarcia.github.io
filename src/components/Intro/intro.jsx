import "./intro.scss";
import * as Scroll from "react-scroll";

let Element = Scroll.Element;

function Intro() {
  return (
    <Element name="intro">
    <div className="intro-container" name="intro">
      <header className="intro-header">
        <div className="intro-conent">
          <h2 id="hey"> Hey! I'm </h2>
          <h1 id="name">Darius Garcia.</h1>
        <p className="intro-message">
            I'm a front-end developer that is driven to uncover the
            "why" in how things work. I'm looking to contribute to 
            interesting projects that will make a meaningful impact on people.
        </p>
          </div>
      </header>
    </div>
    </Element>
  );
}

export default Intro;
