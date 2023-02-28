import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useRef} from 'react';

function App() {

  const cursor = useRef(null)

  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }


  return (
    <div className="App" onMouseMove={changePosition}>
      <div className="cursor" ref={cursor}></div>

      <Navbar/>
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
