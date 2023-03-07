import '../styles/technologies.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTranslation } from 'react-i18next';
import Card from './card';

export default function Technologies (){

  const [t] = useTranslation("global");


  const projectDates = [
    {id:1, name: `${t("technologies.turneroBack.name")}`, description: `${t("technologies.turneroBack.description")}`, tecnologias:['nodejs.png', 'graphql.png', 'sequelize.png', 'webpack.png', 'express-js.png', 'apollo.png', 'jwt.png'], imagen: './portfolio/assets/backend-passera.jpg', link:'https://odontologia-back-production.up.railway.app/graphql' },
    {id:2, name: `${t("technologies.turneroFront.name")}`, description: `${t("technologies.turneroFront.description")}`, tecnologias: ['react.png', 'apollo.png'], imagen: 'portfolio/assets/frontend-passera.jpg', link:'https://magical-kheer-57ed52.netlify.app/'},
    {id:3, name: 'Portfolio', description: `${t("technologies.portfolio.description")}`, tecnologias: ['react.png', 'bootstrap.png'], imagen: 'portfolio/assets/portfolio.jpg', link: 'https://rbkheredia.github.io/portfolio/'},
    {id:4, name: 'Input-tag-box', description: `${t("technologies.input-tag.description")}`, tecnologias: ['react.png', 'mui.png'], imagen: 'portfolio/assets/input-tag.jpg', link:'https://rbkheredia.github.io/Mui-Material.-React.-Input-Tags-Box/index'}

  ]
  return(
    <div className="cont-technologies">
      
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
    </div>
  )
}