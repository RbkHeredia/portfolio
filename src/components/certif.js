import '../styles/about.css'

export default function Certificados ({ image, title }){
  return(
    <div className="certif">
      <img src={image} alt=''/>
      <h5>{title}</h5>
    </div>
  )
}