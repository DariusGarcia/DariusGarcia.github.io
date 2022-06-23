import "./about.scss";
import * as Scroll from "react-scroll";

let Element = Scroll.Element;

function About() {
  return (
    <Element name="about">
      <div className="about-container-component" id="about">
        <h1 className="about-me">About Me</h1>
        <div>
          <p className="about-me-message">
            I'm a recent UC Irvine graduate with a degree in Business Economics.
            I'm a self-taught front-end developer that is driven to uncover the
            "why" in how things work.
          </p>
          <br></br>
          <p className="about-me-message">
            I found a passion for programming due to having to think outside the
            box for solving various real world problems and being able to let my
            creativity run freely. I'm always trying to learn new technologies
            to further advance my capabilities to see where my creativity leads
            me.
          </p>
          <br></br>
          <p className="about-me-message">
            I strive to keep learning new things to not only apply to my
            everyday life, but to <u>constantly challenge what's possible</u>. I
            try to refrain from accepting one approach of doing something, but
            rather try to seek comfort in embracing the <i>unknown</i> to be
            able to shed light on new solutions. I'm a problem solver that wants
            to utilize my skills to help other people and to make the world a
            better place for all!
          </p>
        </div>
      </div>
    </Element>
  );
}

export default About;
