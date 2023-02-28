import React from 'react'

export default function () {

    let date = new Date();
    let year = date.getFullYear()
  return (
    <footer>
            <p>© {year} Frantech Web Solutions Ltd</p>
           
    </footer>
  )
}
