import { useState } from 'react';
import '../styles/contact.css';
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next'


export default function Contact (){

  const [t]= useTranslation("global");

  const [formData, setFormData] = useState({name:'', business:'', message:''})
  const [showAlert, setShowAlert] = useState(false)

  const handleName = (event) =>{
    setFormData({...formData, name:event.target.value})
  }

  const handleBusiness = (event) =>{
    setFormData({...formData, business:event.target.value})
  }

  const handleMessage = (event) =>{
    setFormData({...formData, message:event.target.value})
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formData, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text)
        setShowAlert(true)
        setTimeout(()=>{
          setShowAlert(false)
          setFormData({name:'', business:'', message:''})
        },2000)
        
      }, (error) => {
          console.log(error.text);
      });
  };

  return(
    <div className='cont-all'>
      <div className='cont-contact'>
        <div className='cont-left-contact'>
          <div className='cont-title-contact'>
            
          </div>
          <div className='cont-contact-info'>
            <a href='https://github.com/RbkHeredia'>
              <h5 ><FontAwesomeIcon className='icon-brand' icon={faSquareGithub}/></h5>
            </a>
            <a href='https://www.linkedin.com/in/rebeca-heredia-60599823a/'>
              <h5 ><FontAwesomeIcon className='icon-brand' icon={faLinkedin}/></h5>
            </a>
            <a href='mailto:rbkheredia@gmail.com'>
              <h5><FontAwesomeIcon className='icon-brand' icon={faSquareEnvelope} /></h5>
            </a>
          </div>
        </div>
        
        <div className='cont-form'>
          <form>

            <div className='input-section'>
              <label htmlFor='name'>{t("contact.name")}</label>
              <input id='name' maxLength={40} onChange={handleName} value={formData.name} required/>
            </div>

            <div className='input-section'>
              <label htmlFor='business' >{t("contact.business")}</label>
              <input id='business' onChange={handleBusiness} value={formData.business} required/>
            </div>

            <div className='input-section'>
              <label htmlFor='message' >{t("contact.message")}</label>
              <textarea id='message' onChange={handleMessage} value={formData.message} required/>
            </div>

            <div className='cont-button'>
              <button href="#" className="to-top" onClick={sendEmail}></button>
            </div>
          </form>
          
        </div>
        {showAlert &&
          <Alert variant='success' >
            {t("contact.alert")}
          </Alert>
        }
      </div>
    </div>
    
  )
}