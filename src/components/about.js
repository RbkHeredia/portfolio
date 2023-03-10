import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../styles/about.css';
import { useTranslation } from 'react-i18next';

export default function About (){

  const [t] = useTranslation("global")

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
      
      
      <div className='cont-video'>
        <video className='video' autoplay="true" muted="true" loop="true" src='portfolio/assets/video.mp4'></video>
      </div>
    </div>
  )
}