import { Link, useParams } from 'react-router-dom';
import Chip from '../components/chip';
import '../styles/project.css';
import { useTranslation } from 'react-i18next';
import CardSkills from '../components/cardSkills';
import { projectsInfo } from '../mock/projects';

export default function Projects(){
  const [t] = useTranslation("global");
  const { id } = useParams();
  const element =projectsInfo.find(p=>p.id == id)
  
  /* console.log(projectsInfo.maps(p=>find(p.id== id))); */
  return(
    <div className="cont-project">
      <div className="projects">
        <div className="portada">
          <img style={{objectFit: "cover", width:"100%", height:"100%", borderRadius:"42px", opacity:".7"}} src={element.imagen}/>
        </div>
        <div className='project-content'>
          <div className='project-left'>
            <h2>{t(`${element.name}`)}</h2>
            <p>{t(`${element.description}`)}</p>
            <div  className='cont-chips'>
              <a target="_blank" href={element.link} style={{textDecoration:'none'}}>
                <Chip text='demo' />
              </a>
                &nbsp;&nbsp;
              <a target="_blank" href={element.git} style={{textDecoration:'none'}}>
                <Chip text='codigo' />
              </a>
            </div>
            <br/>
            <Link to='/portfolio/' style={{color:'white'}}>atras</Link>
          </div>
          <div className='project-right'>
            <CardSkills techn={element.tecnologias}/>
          </div>
        </div>
      </div>
    </div>
  )
}