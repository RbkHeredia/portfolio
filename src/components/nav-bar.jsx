import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { useTranslation } from 'react-i18next';
import Chip from './chip';

export default function NavBar (){

  const [t, i18n] = useTranslation("global");

  return(
    <div className="container-nav">
     <div className='cont-chips'>
      <Chip text={t("navbar.button.spanish")} onClick={()=> i18n.changeLanguage("es")}/>
      <Chip text={t("navbar.button.english")} onClick={()=> i18n.changeLanguage("en")}/>
     </div>
    </div>
  )
}