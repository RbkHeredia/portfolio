import '../styles/home.css';
import foto from '/assets/portfolio.png';
import Circle from './circle';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [t] = useTranslation("global");
  return(
    <div className="cont-home">
      <div className='container-home'>
        <div className='home-left'>
          <h1>Rebeca Heredia</h1>
          <div className='line'></div>
          <h2>{t("about.profession")}</h2>
        </div>
        <div className='home-right'>
          <img src={foto} className='img-portfolio' style={{zIndex:'2'}}/>
        </div>
      </div>
      
      <Circle top='-10rem' right='-10rem'/>
      <div className='info-foot'>
        <h2>2023</h2>
        <div className='white-line'></div>
        <p>rbkheredia.github.io/portfolio/</p>
      </div>
    </div>
  )
}