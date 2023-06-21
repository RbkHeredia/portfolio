import '../styles/about.css';
import foto from '/assets/port-moji.png';
import { useTranslation } from 'react-i18next';
import Circle from './circle';

export default function About (){

  const [t] = useTranslation("global");

  return(
    <div className='cont-photo'>
      <div className='container-photo'>
        <img src={foto} className='img-portfolio' alt='photo-portfolio' style={{zIndex:'2'}}/>
      </div>
      <div className='container-text'>
        <div className='cont-text'>
          <h1>{t("about.title")}</h1>
          <p>{t("about.text")}</p>
        </div>
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