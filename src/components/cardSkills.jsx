import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/project.css';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function CardSkills({techn}){
  return(
    <div className="card-skills">
      {techn.map((tech, i)=>(
        <p key={i}><FontAwesomeIcon icon={faCode}/>&nbsp; {tech}</p>
      ))}
    </div>
  )
}