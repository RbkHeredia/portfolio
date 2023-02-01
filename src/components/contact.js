import { useState } from 'react';
import '../styles/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function Contact (){

  const [formData, setFormData] = useState({name:'', business:'', message:''})

  const handleName = (event) =>{
    setFormData({...formData, name:event.target.value})
  }

  const handleBusiness = (event) =>{
    setFormData({...formData, business:event.target.value})
  }

  const handleMessage = (event) =>{
    setFormData({...formData, message:event.target.value})
  }

  
  return(
    <div className='cont-contact'>
      <div className='cont-left-contact'>
        <div className='cont-title-contact'>
          <h1>Contacto</h1>
        </div>
        <div className='cont-contact-info'>
          <a href='https://github.com/RbkHeredia'>
            <h5 ><strong>GitHub</strong></h5>
          </a>
          <a href='https://www.linkedin.com/in/rebeca-heredia-60599823a/'>
            <h5><strong>Linkedin</strong></h5>
          </a>
          <a href='mailto:rbkheredia@gmail.com'>
            <h5><strong>Email</strong></h5>
          </a>
        </div>
      </div>
      
      <div className='cont-form'>
        <form>

          <div className='input-section'>
            <label htmlFor='name'>Nombre</label>
            <input id='name' maxLength={40} onChange={handleName} value={formData.name} required/>
          </div>

          <div className='input-section'>
            <label htmlFor='business' >Asunto</label>
            <input id='business' onChange={handleBusiness} value={formData.business} required/>
          </div>

          <div className='input-section'>
            <label htmlFor='message' >Mensaje</label>
            <textarea id='message' onChange={handleMessage} value={formData.message} required/>
          </div>

          <div className='cont-button'>
            <button className='send-button'>
              <FontAwesomeIcon icon={faArrowRight}/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}