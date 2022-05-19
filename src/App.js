
import './App.css';
import Header from './components/header/header';
import About from './components/About/about';

function App() {
  return (
    <div className="App">

        <div><Header /></div>
        <div className='body-about'>
          <About />
      
        </div>
    </div>
  );
}

export default App;
