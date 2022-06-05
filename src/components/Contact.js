import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
                

    <div id="lets-chat">
        <h2>Let's have a chat</h2>
        <p>We would love to hear about your business and hopefully we can help you develop tools to improve your business further.</p>
    </div>

    <form>

        <input type="text"/>
        <label>Name</label>

        <input type="number"/>
        <label>Phone Number</label>

        <input type="email"/>
        <label>Email</label>

        <textarea></textarea>

        <button type="submit">Send</button>

    </form>

    
</section>
  )
}
