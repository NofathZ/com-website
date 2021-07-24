import { useState } from 'react'
import './RoleCard.scss'
import styled from 'styled-components'
import { Button, Modal } from 'react-bootstrap'

const RoleCardImg = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 100%;
  background: url(${props => props.source});
  background-size: contain;
  background-position: center center;
  border-radius: 100%;
`

function RoleCard(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <div className="role-card-container">
        <div className="role-card-img-box" onClick={handleShow}>
          <RoleCardImg source={props.photo} />
        </div>
        <div className="role-title" style={{marginTop:"24px"}}>
          <p className="body-five">{props.name}</p>
        </div>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>{props.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1 className="lead-three">Description</h1>
          <p className="body-one">{props.description}</p>
          <hr/>
          <h1 className="lead-three">Requirement</h1>
          <p className="body-one">{props.requirement}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default RoleCard