import '../styles/card.css';
import { useTranslation } from 'react-i18next';
import Chip from '../components/chip';
import { useNavigate } from 'react-router-dom';


export default function Card ({ image, title, id }){
  const navigate = useNavigate();
  const [t] = useTranslation("global");

  return(
    <div className='cont-card'>
      <div className="card">
      <img src={image} alt=""/>
        <div className="card-content">
          <h2>
            {t(title)}
          </h2>
          <Chip text={t("projects.chip")} onClick={()=>navigate(`/project/${id}`)}/>
        </div>
    </div>
  </div>
  )
}