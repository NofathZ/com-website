import './Head.scss'
import styled from 'styled-components'
import ChairmanPhoto from '../../asset/img/Structure/Chairman.png'
import ViceChairmanPhoto from '../../asset/img/Structure/ViceChairman.png'

const ChairmanImg = styled.div`
  width: 296px;
  height: 480px;
  // background-color: green;
  margin-right: 2px;
  border-radius: 50px 0 0 50px;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
`
const ViceChairmanImg = styled.div`
  width: 296px;
  height: 480px;
  // background-color: green;
  margin-left: 2px;
  border-radius: 0 50px 50px 0;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
`
const ChairmanViceSmallImg = styled.div`
  border-radius: 20px;
  width: 296px;
  height: 480px;
  // background-color: green;
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
`

function Jumbotron() {
  return(
    <>
      <div className="container-xl d-none d-md-block">
        <div className="row">
          <div className="col-md d-flex justify-content-end align-items-end">
            <div className="chairman-name d-none d-lg-block">
              <p className="title heading-two">Chairman</p>
              <p className="name lead-four">Daffa Tyora Hamedya</p>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center align-items-center">
            <ChairmanImg source={ChairmanPhoto} />
            <ViceChairmanImg source={ViceChairmanPhoto} />
          </div>
          <div className="col-md d-flex justify-content-start align-items-end">
            <div className="vice-chairman-name d-none d-lg-block">
              <p className="title heading-two">Vice Chairman</p>
              <p className="name lead-four">Mohammad Ilham Ramadhan Heru</p>
            </div>
          </div>
        </div>
        <div className="row col-lg d-lg-none">
          <div className="col-md"></div>
          <div className="col-md d-flex justify-content-center align-items-start">
            <div className="name-small">
              <p className="title heading-two">Chairman</p>
              <p className="name lead-four">Daffa Tyora Hamedya</p>
            </div>
            <div className="name-small">
              <p className="title heading-two">Vice Chairman</p>
              <p className="name lead-four">Mohammad Ilham Ramadhan Heru</p>
            </div>
          </div>
          <div className="col-md"></div>
        </div>
      </div>

      <div className="container-md col-lg d-md-none">
        <div className="row">
          <div className="col-md d-flex justify-content-center align-items-start">
            <div className="chairman-vice-small">
              <ChairmanViceSmallImg source={ChairmanPhoto} />
              <div className="name-small">
                <p className="title heading-two">Chairman</p>
                <p className="name lead-four">Daffa Tyora Hamedya</p>
              </div>
            </div>
          </div>
          <div className="col-md d-flex justify-content-center align-items-start">
            <div className="chairman-vice-small">
              <ChairmanViceSmallImg source={ViceChairmanPhoto} />
              <div className="name-small">
                <p className="title heading-two">Vice Chairman</p>
                <p className="name lead-four">Mohammad Ilham Ramadhan Heru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jumbotron