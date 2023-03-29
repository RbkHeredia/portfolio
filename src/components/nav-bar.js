import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useTranslation } from 'react-i18next';

export default function NavBar (){

  const [t, i18n] = useTranslation("global");

  return(
    <div className="container-nav">
      <ul className='container-list'>
        <li><Link className='link' to='/portfolio'>{t("navbar.about")}</Link></li>
        <li><Link className='link' to='/projects'>{t("navbar.projects")}</Link></li>
        <li><Link className='link' to='/contact'>{t("navbar.contact")}</Link></li>        
      </ul>
      <div className="dropdown">
        <button className="dropbtn"><strong>{t("navbar.button.idiom")}</strong></button>
        <div className="dropdown-content">
          <button className='drop-button' onClick={()=> i18n.changeLanguage("es")}>{t("navbar.button.spanish")}</button>
          <button className='drop-button' onClick={()=> i18n.changeLanguage("en")}>{t("navbar.button.english")}</button>
        </div>
      </div>
  
    </div>
  )
}