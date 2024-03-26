import React from 'react'
import './Contactcard.css'

export const Contactcard = ({iconUrl,text}) => {
  return (
    <div className="contact-details">
        <div className="icon">
            <img src={iconUrl} alt="" />
        </div>

        <p>{text}</p>
    </div>
  )
}
