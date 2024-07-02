import React from 'react'
import './HowWeDoIt.css'

export default function HowWeDoIt({ handleOpen }) {
  return (
    <div id='how-we-do-it'>
        <h1 className='gradient-text' >HOW WE DO IT</h1>

        <div id='slider'>
          <div className='slide'>
            <p className='step-header'>1. Free Consulation</p>

            <p>
            Our complimentary web and app design consultation is a collaborative exploration where we delve into your business's brand, vision, and objectives. In this session, our expert team engages in a comprehensive discussion to understand your company's identity, values, and target audience. We analyze existing branding elements and explore the functionality and features you envision for your website or app.
            </p>

            <p>The goal is to provide tailored design solutions that not only meet but exceed your expectations. By the end of the consultation, you'll gain insights, recommendations, and a clear roadmap, ensuring our designs align seamlessly with your business goals.</p>

          </div>

          <div className='slide'>
            <p className='step-header'>2. Design Stage</p>
            <p>
            In the design stage of our process, our skilled designers will visually bring your vision to life based on the insights gathered during the initial consultation. Using your company's brand elements, values, and specified functionalities, we create a comprehensive visual representation of your website or app ensuring the design aligns seamlessly with your brand identity and resonates with your target audience.
            </p>

            <p>Once our designers have meticulously crafted the visual elements, you'll have the opportunity to review and sign off on the design, ensuring that it accurately reflects your business goals and sets the foundation for the development phase.</p>

          </div>

          <div className='slide'>
            <p className='step-header'>3. Development</p>
            <p>
            In the development stage, we take the approved design and translate it into a fully functional website or app. Our experienced development team employs cutting-edge technologies and best practices to bring the design to life, ensuring seamless navigation, responsiveness, and optimal user experience.
            </p>
            <p>Throughout development, we maintain open communication, providing you with progress updates and addressing any feedback or adjustments promptly. Our goal is to transform the approved design into a robust digital platform that aligns precisely with your initial vision. Once the development is complete, we conduct thorough testing to ensure functionality across various devices and browsers, guaranteeing a polished and reliable end product ready for launch.</p>

          </div>

          <div className='slide'>
            <p className='step-header'>4. Handover</p>
            <p>
            In the handover stage, we facilitate a seamless transition from development to deployment, ensuring your team is well-equipped to manage and maximize the potential of your newly created website or app. This phase encompasses any necessary training sessions to familiarise your staff with the platform's features and functionalities.
            </p>

            <p>Deployment is meticulously executed, and our team remains available for any post-launch support or adjustments. If desired, we can establish ongoing support and development plans, ensuring your digital presence remains current and adaptive to evolving business needs. Our commitment extends beyond the launch, aiming to empower your team for long-term success with the digital solution we've collaboratively built.</p>

          </div>

        </div>

        <button onClick={handleOpen} style={{marginBottom: 40}} className='frantech-btn'>BOOK FREE CONSULTATION</button>
    </div>
  )
}
