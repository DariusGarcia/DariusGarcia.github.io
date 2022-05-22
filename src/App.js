
import './App.css';
import Header from './components/header/header';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Contact from './components/Contact/contact';

function App() {
  
  return (
    <div className="App">

        <div>
          <Header />
        </div>
        <div className='body-about'>
          <Intro />
        </div>
        <div className='body-about'>
          <About />
        </div>
        <div className='body-about'>
          <Projects />
        </div>
        <div className='body-about'>
          <Contact />
        </div>
    </div>
  );
}

export default App;
