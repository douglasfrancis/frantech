import './App.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
