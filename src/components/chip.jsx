import '../styles/navbar.css';

export default function Chip(props){
  return(
    <button aria-label={props.text} className='chip' onClick={props.onClick}>
      {props.text}
    </button>
  )
}