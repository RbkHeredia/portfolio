import '../styles/experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import Chip from './chip';
import Circle from './circle';
import { useTranslation } from 'react-i18next';


export default function Experience (){
  const [t]= useTranslation("global");
  return(
    <div className='cont-exp'>
      <div className='info-top'>
        <h2>{t("experience.title")}</h2>
        <div className='white-line'></div>
        <p>2015 - 2023</p>
      </div>
      <div className='experience'>
        <div className='line' style={{width:'50%'}}></div>
        <h2><FontAwesomeIcon icon={faTerminal} style={{textAlign:'initial'}}/> Empowerit</h2>
        <p>{t("experience.development")}</p>
        <p>(2022 - 2023)</p>
        <h2><FontAwesomeIcon icon={faTerminal} style={{textAlign:'initial'}}/> Continuum</h2>
        <p>{t("experience.support")}</p>
        <p>(2015 - 2022)</p>
        <br/>
        <br/>
        <a href='/assets/CV-Rbk.pdf' target="_blank" rel="noopener noreferrer" download="curriculumRebeca.pdf" style={{textDecoration:'none'}}>
          <Chip text={t("about.download")} style={{marginLeft:'5rem'}}/>
        </a>
      </div>
      <div className='white-line' style={{width:'80%'}}></div>

      <Circle top='100rem' right='5rem'/>
      <Circle top='110rem' right='-5rem'/>
    </div>
  )
}