import '../styles/card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Chip from '../components/chip';


export default function Card ({ image, title, description, link }){
  
  const [t] = useTranslation("global");

  return(
    <div className='cont-card'>
      <div className="card">
      <img src={image} alt=""/>
        <div className="card-content">
          <h2>
            {title}
          </h2>
          <Chip text='Ir a proyecto'/>
          {/* eslint-disable-next-line */}
          {/* <a href={link} className="link-card" target="_blank">
            <span >{t("technologies.view-card")}
              <FontAwesomeIcon icon={faArrowRight} className="fa-arrow"/>
            </span>
          </a> */}
        </div>
        
    </div>
    
  </div>
  )
}