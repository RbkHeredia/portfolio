import '../styles/experience.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTerminal } from '@fortawesome/free-solid-svg-icons';
import Chip from './chip';
import Circle from './circle';
export default function Experience (){
  
  return(
    <div className='cont-exp'>
      <div className='info-top'>
        <h2>Experiencia Laboral</h2>
        <div className='white-line'></div>
        <p>2015 - 2023</p>
      </div>
      <div className='experience'>
        <div className='line' style={{width:'50%'}}></div>
        <h2><FontAwesomeIcon icon={faTerminal} style={{textAlign:'initial', fontSize:'50px'}}/> Empowerit</h2>
        <p>Desarrollo Frontend y Backend</p>
        <p>(2022 - 2023)</p>
        <h2><FontAwesomeIcon icon={faTerminal} style={{textAlign:'initial', fontSize:'50px'}}/> Continuum</h2>
        <p>Soporte técnico</p>
        <p>(2015 - 2022)</p>
        <br/>
        <br/>
        <Chip text='Descargar CV' style={{marginLeft:'5rem'}}/>
      </div>
      <div className='white-line' style={{width:'80%'}}></div>

      <Circle top='100rem' right='5rem'/>
      <Circle top='110rem' right='-5rem'/>
    </div>
  )
}