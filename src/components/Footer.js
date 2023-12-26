import React from 'react'
import linkedin from '../Assets/linkedin.png'

export default function () {

    let date = new Date();
    let year = date.getFullYear()
  return (
    <footer>
            <p style={{fontSize: 16}}>© {year} Frantech Web Solutions Ltd</p>

            <a href='https://www.linkedin.com/company/100259290' target={"_blank"}>
              <img style={{height: 40, width: 40}} src={linkedin} alt="Frantech web solutions Linkedin profile" />
            </a>
           
    </footer>
  )
}
