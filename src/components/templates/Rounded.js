import './Rounded.scss'

function Rounded({text, bgcolor}) {
  return(
    <div className={`rounded-company ${bgcolor}`} style={{marginBottom:"70px"}}>
      <h1 className="lead-five"><b>{text}</b></h1>
    </div>
  )
}

export default Rounded