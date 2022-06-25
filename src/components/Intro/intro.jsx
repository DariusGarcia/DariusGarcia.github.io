import "./intro.scss";
import * as Scroll from "react-scroll";
import Spline from '@splinetool/react-spline';


let Element = Scroll.Element;

function Intro() {
  return (
    <Element name="intro">
      
    <div className="intro-container" name="intro">

    <Spline className="spline-person" scene="https://prod.spline.design/jM7iJtkNdHonXjTv/scene.splinecode" />
    {/* <Spline className="spline-person" scene="https://prod.spline.design/jM7iJtkNdHonXjTv/scene.splinecode" /> */}
      <header className="intro-header">
        <div className="intro-content">
          <h2 id="hey"> Hey! I'm </h2>
          <h1 id="name">Darius Garcia.</h1>
        <p className="intro-message">
            I'm a front-end developer that is driven to uncover the
            "why" in how things work. I'm looking to contribute to 
            interesting projects that will make a meaningful impact on people.
        </p>
          </div>
      </header>

      {/* <Spline scene="https://prod.spline.design/ZFZezPA5-N5T1wzp/scene.splinecode" /> */}
      </div>
    </Element>
  );
}

export default Intro;
