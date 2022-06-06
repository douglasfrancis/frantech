import React from 'react'

export default function () {

    let date = new Date();
    let year = date.getFullYear()
  return (
    <footer>
            <p>© {year} Frantech Web Solutions Ltd</p>
            <nav>
                <a href="#work">Case Study</a>
                <a href="#contact">Contact Us</a>
            </nav>
    </footer>
  )
}
