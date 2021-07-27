import './LeftQuote.scss'
import styled from 'styled-components'

const ImageLeft = styled.div`
  width: 320px;
  height: 420px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
  border-radius: 50px 0px 0px 50px;
  
  @media screen and (max-width: 991px) {
    border-radius: 50px;
  }
`

function LeftQuote(props) {
  return(
    <div className="leftquote-container d-flex justify-content-between align-items-center">
      <div className="leftquote-content">
        <p className="body-six" style={{maxWidth: '800px'}}>{props.quote}</p>
        <p className="lead-three"><b>{props.position}</b></p>
        <p className="body-six">{props.name}</p>
      </div>
      <ImageLeft source={props.source} />
    </div>
  )
}

export default LeftQuote;