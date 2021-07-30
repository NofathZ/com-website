import './Title.scss'

function Title({title, subtitle, bgcolor}) {
  return(
    <div className={`container-fluid d-flex justify-content-center align-items-center flex-column title-container ${bgcolor}`}>
      <h3 className="heading-three heading-underline" style={{textAlign:"center"}}>{title}</h3>
      <h5 className="lead-five" style={{textAlign:"center"}}><b>{subtitle}</b></h5>
    </div>
  )
}

export default Title