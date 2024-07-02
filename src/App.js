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
import HowWeDoIt from './components/HowWeDoIt';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import ReadyToWork from './components/ReadyToWork';


function App() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <div className="App">
      <ToastContainer position='top-center'/>
      <Navbar handleOpen={handleOpen}/>
      <Hero handleOpen={handleOpen}/>
      <WhatWeDo handleOpen={handleOpen}/>
      <HowWeDoIt handleOpen={handleOpen}/>
      <ReadyToWork handleOpen={handleOpen}/>
      <Footer />

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
    </div>
  );
}

export default App;

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  maxWidth: '90vw',
  maxHeight: '75vh',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 2,
  overflow:'scroll'
};
