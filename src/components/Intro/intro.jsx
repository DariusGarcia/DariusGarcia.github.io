import "./intro.scss";
import * as Scroll from "react-scroll";
import Spline from '@splinetool/react-spline';
import macbook from '../../images/portfolio-static.png';
import MediaQuery from "react-responsive";


let Element = Scroll.Element;

function Intro() {
  return (
    <Element name="intro">
      
      <div className="intro-container" name="intro">
      
        <MediaQuery minWidth={1024}>        
          <Spline className="spline-person" scene="https://prod.spline.design/jM7iJtkNdHonXjTv/scene.splinecode" />
        </MediaQuery>
{/*       
        <div className="static-image-container">
          <MediaQuery maxWidth={1023}>
            <img src={macbook} alt="macbook" id="static-image" />
          </MediaQuery>
        </div> */}

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
      </div>
    </Element>
  );
}

export default Intro;
