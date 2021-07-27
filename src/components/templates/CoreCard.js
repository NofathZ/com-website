import './CoreCard.scss';

function CoreCard({title, content, bgcolor}) {
  return(
    <div className={`core-card-container text-center col-4 ${bgcolor}`}>
      <h3 className="heading-underline" style={{marginBottom: "24px"}}>{title}</h3>
      <p className="body-one">{content}</p>
    </div>
  )
}

export default CoreCard