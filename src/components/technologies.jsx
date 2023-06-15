import '../styles/technologies.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import Card from './card';
import Circle from '../components/circle';

export default function Technologies (){

  const [t] = useTranslation("global");


  const projectDates = [
    {id:1, name: `${t("technologies.landingPage.name")}`, description: `${t("technologies.landingPage.description")}`, tecnologias:['nodejs.png', 'graphql.png', 'sequelize.png', 'webpack.png', 'express-js.png', 'apollo.png', 'jwt.png'], imagen: '/assets/freelance.jpg', link:'https://rbkheredia.github.io/landing-page-freelance/' },
    {id:2, name: `${t("technologies.register.name")}`, description: `${t("technologies.register.description")}`, tecnologias: ['react.png', 'apollo.png'], imagen: '/assets/form-register.jpeg', link:'https://rbkheredia.github.io/form-register/'},
    {id:3, name: 'Portfolio', description: `${t("technologies.portfolio.description")}`, tecnologias: ['react.png', 'bootstrap.png'], imagen: '/assets/portfolio.jpg', link: 'https://rbkheredia.github.io/portfolio/'},
    {id:4, name: 'Input-tag-box', description: `${t("technologies.input-tag.description")}`, tecnologias: ['react.png', 'mui.png'], imagen: '/assets/input-tag.jpg', link:'https://rbkheredia.github.io/Mui-Material.-React.-Input-Tags-Box/index'},
    {id:5, name: 'Challenge Card', description: `${t("technologies.card.description")}`, tecnologias: ['react.png', 'mui.png'], imagen: '/assets/card.jpeg', link:'https://rbkheredia.github.io/fm-card/'},
    {id:6, name: `${t("technologies.challenge-FE-Mentor.name")}`, description: `${t("technologies.challenge-FE-Mentor.description")}`, tecnologias: ['react.png', 'mui.png'], imagen: '/assets/cc-challenge.jpeg', link:'https://rbkheredia.github.io/challenge-form/'},


  ]
  return(
    <div className="cont-technologies">
      <div className='cont-projects'>
        <div className='cont-title-projects'>
          <h2>Proyectos</h2>
          <div className='line'></div>
        </div>
        <div className='subt'>
          <p>Desarrollo web</p>
        </div>
      </div>
      <div className="card-cont">
        {projectDates.map((item)=>(
          <Card
            key={item.id}
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