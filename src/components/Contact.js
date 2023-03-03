import React, { useRef} from 'react'
import SendIcon from '@mui/icons-material/Send';
import './Contact.css'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          form.current.reset()
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
                

    <div id="lets-chat">
        <h2>Let's chat</h2>
        <p>We would love to hear about your business and hopefully we can help you develop tools to improve your business further.</p>
    </div>

    <form ref={form} onSubmit={sendEmail}>
      <input className='form-input' placeholder='Name' name='Name'/>
      <input className='form-input' placeholder='Number' name='Number'/>
      <input className='form-input' placeholder='Email' name='Email'/>
      <textarea placeholder='Message' name='Msg'/>
         <button id='send-btn'  endIcon={<SendIcon />} style={{backgroundColor:'#288'}}>
        Send
      </button>

    </form>

    
</section>
  )
}
