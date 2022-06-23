import "./App.scss";
import Navigation from "./components/navigation/navigation";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Socials from "./components/socials/socials";
import Contact from "./components/contact/contact";
// import tweeter from "./tweeter.gif";

function App() {
  return (
    <div className="App">
      <div>
        <Navigation />
      </div>
      <div className="body-about">
        <Intro />
      </div>
      <div className="body-about">
        <About />
      </div>
      <div className="body-about">
        <Projects />
      </div>
      <div className="body-about">
        <Socials />
      </div>
      <div className="body-about">
        <Contact />
      </div>
    </div>
  );
}

export default App;
