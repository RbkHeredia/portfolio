import { Link } from 'react-router-dom';
import '../styles/navbar.css';

export default function NavBar (){
  return(
    <div className="container-nav">
      <li className='container-list'>
        <Link to='/'>
          <ul >Sobre mi</ul>
        </Link>
        <Link to='/projects'>
          <ul >Proyectos</ul>
        </Link>
        <Link to='/contact'>
          <ul >Contacto</ul>
        </Link>
        
      </li>
      {/* <div className="dropdown">
        <button className="dropbtn">Idioma</button>
        <div className="dropdown-content">
          <button >Spanish</button>
          <button >English</button>
        </div>
      </div> */}
  
    </div>
  )
}