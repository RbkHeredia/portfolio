
export default function Circle({top, right, left}){

  const styleCircle = {
    border: '25px solid #F8049C',
    borderRadius: '100%',
    width: '400px',
    height: '400px',
    position: 'absolute',
    opacity: '0.7',
    top:top,
    right:right,
    boxSizing:'border-box',
    left:left,
  }

  return(
    <div className="circle" style={styleCircle}></div>
  )
}