import '../styles/about.css';

export default function About (){
  return(
    <div className='cont-photo'>
      
      <div className='container-photo'>
        <div className='mask-photo'>
          <img alt='mi-foto' className='photo' src='/portfolio/assets/mi-foto.jpg'></img>
          <h3>Rebeca Heredia</h3>
          <h4>Desarrolladora web</h4>
        </div>
        
      </div>
      
      <div className='cont-text'>
        <h1>Sobre mi</h1>
        <p>Soy una persona entusiaste y responsable, con interés en el diseño y la tecnología. 
          Comprometida con el servicio al cliente y la entrega de proyectos en tiempo y forma.</p>
      </div>
      <div className='cont-video'>
        <video className='video' autoplay="true" muted="true" loop="true" src='portfolio/assets/video.mp4'></video>
      </div>
    </div>
  )
}