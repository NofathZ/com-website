import './RightQuote.scss'
import styled from 'styled-components'

const ImageRight = styled.div`
  width: 320px;
  height: 420px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
  border-radius: 0px 50px 50px 0px;
  
  @media screen and (max-width: 991px) {
    border-radius: 50px;
  }
`

function RightQuote(props) {
  return(
    <div className="rightquote-container d-flex justify-content-between align-items-center">
      <ImageRight source={props.source} />
      <div className="rightquote-content">
        <p className="body-six" style={{maxWidth: '800px'}}>{props.quote}</p>
        <p className="lead-three"><b>{props.position}</b></p>
        <p className="body-six">{props.name}</p>
      </div>
    </div>
  )
}

export default RightQuote;