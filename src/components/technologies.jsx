import '../styles/technologies.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import Card from './card';
import Circle from '../components/circle';
import { projectsInfo } from '../mock/projects';

export default function Technologies (){

  const [t] = useTranslation("global");

  return(
    <div className="cont-technologies">
      <div className='cont-projects'>
        <div className='cont-title-projects'>
          <h2>{t("projects.title")}</h2>
          <div className='line'></div>
        </div>
        <div className='subt'>
          <p>{t("projects.subt")}</p>
        </div>
      </div>
      <div className="card-cont">
        {projectsInfo.map((item)=>(
          <Card
            key={item.id}
            id={item.id}
            image={item.imagen}
            title={item.name}
            description={item.description}
            link={item.link}
          />
        ))}
    </div>
    <Circle left='-10rem'/>
    </div>
  )
}