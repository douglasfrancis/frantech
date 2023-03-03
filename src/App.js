import './App.css';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { useRef, useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Contact from './components/Contact';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
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

      <Footer />
    </div>
  );
}

export default App;
