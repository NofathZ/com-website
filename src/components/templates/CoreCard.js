import './CoreCard.scss';

function CoreCard({title, content, source, bgcolor}) {
  return(
    <div className="d-flex flex-column">
      <div className={`core-card-upper text-center col-4 ${bgcolor}`}>
        <h3 className="heading-underline" style={{marginBottom: "24px"}}>{title}</h3>
        <p className="body-one">{content}</p>
      </div>
      <div className={`core-card-under text-center`}>
        <img className="mx-auto img-card-under" src={source} alt=""></img>
      </div>
    </div>
  )
}

export default CoreCard