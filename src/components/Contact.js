import React, { useRef, useState} from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import {toast} from 'react-toastify'
import axios from 'axios'

export default function Contact() {

  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  const form = useRef();
  const name = useRef(null);
  const number = useRef(null);
  const email = useRef(null);
  const msg = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    let payload = {
      name: name.current.value,
      email: email.current.value,
      msg: msg.current.value
    }
    if(!name.current.value || !email.current.value || !msg.current.value){

      toast.error("Please add all fields")

    } else {
      setLoading(true)

      axios.post(`${process.env.REACT_APP_API_URL}/frantech/contact`, payload)
      .then((res) => {
        setLoading(false)
        setSent(true)
      })
      .catch((e) => {
        toast.error("Error sending");
        setLoading(false)

      })
    }
  }

  return (
    <section id="contact">
      {sent ? 

    <p style={{margin: '2rem', fontWeight:'bold', textAlign:'center'}}>Thanks for getting in touch!</p>    
   

    :
    <>
     <div id="lets-chat">
        <h2 style={{fontWeight: 900}}>Let's chat</h2>
        <p>We would love to hear about your business and hopefully we can help you develop tools to improve your business further.</p>

        <form ref={form} onSubmit={handleSubmit}>
          <input className='form-input' ref={name} placeholder='Name' name='Name'/>
          <input className='form-input' ref={number} placeholder='Number' name='Number'/>
          <input className='form-input' ref={email} placeholder='Email' name='Email'/>
          <textarea placeholder='Message' ref={msg} name='Msg'/>
          <button className='secondary-btn' disabled={loading}>{loading? 'Sending...': 'Send'}</button>

          <p style={{fontSize: '0.8rem'}}>By submitting this form, I consent to Frantech Web Solutions storing the above information to contact me regarding any services offered by Frantech Web Solutions.</p>
        </form>
      </div>
    </>

    
  }
    

    
</section>
  )
}
