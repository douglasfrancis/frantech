import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Projects/>
      <Contact />
    </div>
  );
}

export default App;
