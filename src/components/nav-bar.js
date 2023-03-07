import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useTranslation } from 'react-i18next';

export default function NavBar (){

  const [t, i18n] = useTranslation("global");

  return(
    <div className="container-nav">
      <li className='container-list'>
        <Link to='/portfolio'>
          <ul >{t("navbar.about")}</ul>
        </Link>
        <Link to='/projects'>
          <ul >{t("navbar.projects")}</ul>
        </Link>
        <Link to='/contact'>
          <ul >{t("navbar.contact")}</ul>
        </Link>
        
      </li>
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