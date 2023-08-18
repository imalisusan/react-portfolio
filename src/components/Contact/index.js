import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass] = useState('text-animate')
    const form = useRef()
    
    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs
          .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
          .then(
            () => {
              alert('Message successfully sent!')
              window.location.reload(false)
            },
            () => {
              alert('Failed to send the message, please try again')
            }
          )
      }

    return (
    <>
        <div className="container contact-page">
            <div className="text-zone">
            <h1>
                <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
                />
            </h1>
          <p>
          I'm looking for job openings that provide a chance to enhance my skills and knowledge in my field. You can contact me through any of my social media profiles for communication purposes. Feel free to reach out for inquiries or requests, and you can also get in touch using the form below.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input placeholder="Email" type="email" name="email" required/>
                </li>
                <li>
                  <input placeholder="Subject" type="text" name="subject" required/>
                </li>
                <li>
                  <textarea placeholder="Message" name="message" required></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Imali Susan,
          <br />
          <br />
          Nairobi, <br />
          Kenya. <br />
          <br />
          <span>susanimali52@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-1.286389, 36.817223]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-1.286389, 36.817223]}>
              <Popup>Imali lives here, come over for a cup of coffee :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
    )
}

export default Contact