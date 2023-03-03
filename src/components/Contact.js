import React, { useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'

export default function Contact() {

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const form = useRef();
  const name = useRef(null);
  const number = useRef(null);
  const email = useRef(null);
  const msg = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if(!name.current.value || !email.current.value || !msg.current.value){

      toast.error("Please add all fields")

    } else {
      setLoading(true)

      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          form.current.reset()
          setLoading(false)
          setSent(true)

      }, (error) => {
          toast.error(error.text);
          setLoading(false)

      });
    }


    
  };

  return (
    <section id="contact">
                
    <div id="lets-chat">
        <h2>Let's chat</h2>
        <p>We would love to hear about your business and hopefully we can help you develop tools to improve your business further.</p>
    </div>

    {sent ? 
    <p style={{margin: '2rem', fontWeight:'bold', textAlign:'center'}}>Thanks for getting in touch!</p>:

    <form ref={form} onSubmit={sendEmail}>
    <input className='form-input' ref={name} placeholder='Name' name='Name'/>
    <input className='form-input' ref={number} placeholder='Number' name='Number'/>
    <input className='form-input' ref={email} placeholder='Email' name='Email'/>
    <textarea placeholder='Message' ref={msg} name='Msg'/>
    <button id='send-btn' style={{backgroundColor:'#288'}} disabled={loading}>{loading? 'Sending...': 'Send'}</button>

    <p style={{fontSize: '0.8rem'}}>By submitting this form, I consent to Frantech Web Solutions storing the above information to contact me regarding any services offered by Frantech Web Solutions.</p>

  </form>
  }
    

    
</section>
  )
}
