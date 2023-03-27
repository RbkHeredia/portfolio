import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/about.css';
import { useTranslation } from 'react-i18next';
import Certificados from './certif';

export default function About (){

  const [t] = useTranslation("global");

  const certificados = [
    {id:1, title:`${t("about.certification.accesibility")}`, image:'/portfolio/assets/certificados/accesibilidad-web.jpg'},
    {id:2, title:'CSS', image:'/portfolio/assets/certificados/css.jpg'},
    {id:3, title:`${t("about.certification.cybers")}`, image:'/portfolio/assets/certificados/cybersecurity.jpeg'},
    {id:4, title:`${t("about.certification.git")}`, image:'/portfolio/assets/certificados/git.jpeg'},
    {id:5, title:`${t("about.certification.react-n")}`, image:'/portfolio/assets/certificados/react-native.jpeg'},
  ]

  return(
    <div className='cont-photo'>
      
      <div className='container-photo'>
        <div className='mask-photo'>
          <img alt='mi-foto' className='photo' src='/portfolio/assets/mi-foto.jpg'></img>
          <h3>Rebeca Heredia</h3>
          <h4>{t("about.profession")}</h4>
        </div>
        
      </div>
      <div className='container-text'>
        <div className='cont-text'>
          <h1>{t("about.title")}</h1>
          <p>{t("about.text")}</p>
        </div>
        <div className='cont-button-about'>
          <button className='button-download'>
            <a href='portfolio/assets/CV-Rebe-dev.pdf' target="_blank" rel="noopener noreferrer" download="curriculumRebeca.pdf">
              {t("about.download")}
              <FontAwesomeIcon icon={faDownload} className='fa-download'/>
            </a>
            
          </button>
        </div>
        
      </div>
      
      <div className='cont-certific'>
        {certificados.map((item)=>(
          <Certificados 
            image={item.image}
            title={item.title}
            key={item.id}
          />
        ))}
      </div>
      
      <div className='cont-video'>
        <video className='video' autoPlay={true} muted={true} loop={true} src='portfolio/assets/video.mp4'></video>
      </div>
    </div>
  )
}