import { useState } from 'react';
import '../styles/technologies.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';

export default function Technologies (){

  const [t] = useTranslation("global");

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselDates = [
    {id:1, name: `${t("technologies.turneroBack.name")}`, description: `${t("technologies.turneroBack.description")}`, tecnologias:['nodejs.png', 'graphql.png', 'sequelize.png', 'webpack.png', 'express-js.png', 'apollo.png', 'jwt.png'], imagen: 'portfolio/assets/backend-passera.jpg', link:'https://odontologia-back-production.up.railway.app/graphql' },
    {id:2, name: `${t("technologies.turneroFront.name")}`, description: `${t("technologies.turneroFront.description")}`, tecnologias: ['react.png', 'apollo.png'], imagen: 'portfolio/assets/frontend-passera.jpg', link:'https://magical-kheer-57ed52.netlify.app/'},
    {id:3, name: 'Portfolio', description: `${t("technologies.portfolio.description")}`, tecnologias: ['react.png', 'bootstrap.png'], imagen: 'portfolio/assets/portfolio.jpg', link: 'https://rbkheredia.github.io/portfolio/'},
    {id:4, name: 'Input-tag-box', description: `${t("technologies.input-tag.description")}`, tecnologias: ['react.png', 'mui.png'], imagen: 'portfolio/assets/input-tag.jpg', link:'https://rbkheredia.github.io/Mui-Material.-React.-Input-Tags-Box/index'}

  ]
  return(
    <div className="cont-technologies">
      <div className="carousel-cont">
      <Carousel activeIndex={index} onSelect={handleSelect} className='carouselCSS' variant="dark">
        {carouselDates.map((date)=>(
            <Carousel.Item key={date.id}>
              <div className='cont-tech'>
                <a href={date.link}>
                  <img
                    className="img-carousel"
                    src={date.imagen}
                    alt={`slide${date.id}`}
                  />
                </a>
                
                <div className='flex-tech'>
                  {date.tecnologias.map((tech, index)=>(
                    <div  key={index} className='img-logos'>
                      <img src={`portfolio/assets/logos/${tech}`} className='logos' alt=''/>
                    </div>
                  ))}
                </div>
                
              </div>
              <Carousel.Caption>
                <div className='backg-dates'>
                  <h3>{date.name}</h3>
                  <p>{date.description}</p>
                </div>
              </Carousel.Caption>
              
            </Carousel.Item>
          
        ))}
        
      </Carousel>
    </div>
    </div>
  )
}