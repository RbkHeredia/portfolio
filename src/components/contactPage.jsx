import '../styles/contactPage.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function ContactPage(){
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

    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData, import.meta.env.VITE_PUBLIC_KEY)
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
    <div className="cont-contactP">
      <div className='info-topContact'>
        <p>{t("contact.title")}</p>
        <div className='white-line'></div>
        <p className='nombre-text'>Rebeca Heredia</p>
      </div>
      <form onSubmit={sendEmail} >
        <div className='cont-form'>
          <div className='left-form'>
            <label htmlFor='name'>{t("contact.name")}</label>
            <input id='name' maxLength={40} onChange={handleName} value={formData.name} required/>
            <label htmlFor='business' >{t("contact.business")}</label>
            <input id='business' onChange={handleBusiness} value={formData.business} required/>
          </div>
          <div className='right-form'>
            <label htmlFor='message' >{t("contact.message")}</label>
            <textarea id='message' onChange={handleMessage} value={formData.message} rows={3} required/>
            <br/>
            {showAlert &&
              <Alert variant='success' >
                {t("contact.alert")}
              </Alert>
            }
            <div className='cont-button'>
              <button aria-label='to-top' href="#" className="to-top" type='submit'></button>
            </div>
            <br/>
          </div>
        </div>
      </form>
      <div className='cont-icons-contact'>
        <a href='https://github.com/RbkHeredia' aria-label='Github-link'>
          <h3 ><FontAwesomeIcon className='icon-brand' icon={faSquareGithub}/></h3>
        </a>
        <a href='https://www.linkedin.com/in/rebeca-heredia-60599823a/' aria-label='Linkedin-link'>
          <h3 ><FontAwesomeIcon className='icon-brand' icon={faLinkedin}/></h3>
        </a>
        <a href='mailto:rbkheredia@gmail.com' aria-label='Email-link'>
          <h3><FontAwesomeIcon className='icon-brand' icon={faSquareEnvelope}  /></h3>
        </a>
      </div>
      <div className='line' style={{width:'60%'}}></div>
      <h2 style={{fontSize:'60px'}}>{t("contact.thanks")}</h2>
    </div>
  )
}