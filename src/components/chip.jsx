import '../styles/navbar.css';

export default function Chip(props){
  return(
    <button className='chip' onClick={props.onClick}>
      <span>{props.text}</span>
    </button>
  )
}