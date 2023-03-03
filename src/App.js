import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Contact from './components/Contact';
import Modal from '@mui/material/Modal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxWidth: '90vw',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  overflow:'scroll'
};

function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const cursor = useRef(null)

  const changePosition = (e) => {
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  }


  return (
    <div className="App" onMouseMove={changePosition}>
      <div className="cursor" ref={cursor}></div>
      <ToastContainer position='top-center'/>
      <Navbar handleOpen={handleOpen}/>

      <Projects />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Contact />
        </Box>
      </Modal>

      <button id='contact-side-btn' onClick={handleOpen}>Contact Us</button>

      <Footer />
    </div>
  );
}

export default App;
