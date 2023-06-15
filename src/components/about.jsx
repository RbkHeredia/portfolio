import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/about.css';
import foto from '/assets/port-moji.png';
import { useTranslation } from 'react-i18next';
import Circle from './circle';

export default function About (){

  const [t] = useTranslation("global");

  const certificados = [
    {id:1, title:`${t("about.certification.accesibility")}`, image:'/assets/certificados/accesibilidad-web.jpg'},
    {id:2, title:'CSS', image:'/assets/certificados/css.jpg'},
    {id:3, title:`${t("about.certification.cybers")}`, image:'/assets/certificados/cybersecurity.jpeg'},
    {id:4, title:`${t("about.certification.git")}`, image:'/assets/certificados/git.jpeg'},
    {id:5, title:`${t("about.certification.react-n")}`, image:'/assets/certificados/react-native.jpeg'},
  ]

  return(
    <div className='cont-photo'>
      
      <div className='container-photo'>
        <img src={foto} className='img-portfolio' style={{zIndex:'2'}}/>

        
      </div>
      <div className='container-text'>
        <div className='cont-text'>
          <h1>{t("about.title")}</h1>
          <p>{t("about.text")}</p>
        </div>
        {/* <div className='cont-button-about'>
          <button className='button-download'>
            <a href='/assets/CV-RbkHeredia.pdf' target="_blank" rel="noopener noreferrer" download="curriculumRebeca.pdf">
              {t("about.download")}
              <FontAwesomeIcon icon={faDownload} className='fa-download'/>
            </a>
            
          </button>
        </div> */}
        
      </div>
      <div className='info-foot2'>
        <h2>2023</h2>
        <p>Portfolio</p>
        <div className='white-line'></div>
      </div>
      <Circle top='45rem' left='-10rem'/>
    </div>
  )
}