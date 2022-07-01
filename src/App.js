import "./App.scss";
import Navigation from "./components/navigation/navigation";
import Intro from "./components/intro/intro";
import About from "./components/about/about";
import Tech from "./components/tech/tech";
import Projects from "./components/projects/projects";
import Socials from "./components/socials/socials";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

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
        <Tech />
      </div>
      <div className="body-about">
        <Projects />
      </div>
      <div className="body-about">
        <Contact />
      </div>
      <div className="body-about">
        <Footer />
      </div>
    </div>
  );
}

export default App;
