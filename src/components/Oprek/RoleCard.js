import './RoleCard.scss'
import LogoTest from '../../asset/img/logo_test.svg'
import styled from 'styled-components'

// solusi line 11 https://css-tricks.com/forums/topic/svg-css-background-image-not-showing-in-chrome/

const RoleCardImg = styled.div`
  // width: 100%;
  // height: 100%;
  width: 180px;
  height: 180px;
  border-radius: 100%;
  // background-img: ${LogoTest};
  background: url(${props => props.source});
  background-size: cover;
  background-position: center center;
  // background: black;
  border-radius: 100%;
`

function RoleCard() {
  return(
    <>
      <div className="role-card-container">
        <div className="role-card-img-box" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          {/* <div className="role-card-img"></div> */}
          {/* <RoleCardImg source={LogoTest} /> */}
          <RoleCardImg source="http://staylo.herokuapp.com/images/penginapan/1.jpg" />
        </div>
        <div className="role-title" style={{marginTop:"24px"}}>
          <p className="body-five">Titlenya dsini</p>
        </div>
      </div>

      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog  modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Understood</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default RoleCard