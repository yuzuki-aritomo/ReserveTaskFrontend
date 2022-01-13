import { FC } from "react"
import { Modal, Button } from "react-bootstrap"

type ModalProps = {
  show: boolean,
  content: string,
  handleClose: VoidFunction,
  handleSubmit?: VoidFunction,
}

const BackdropModal: FC<ModalProps> = ({ show, content, handleClose, handleSubmit }) => {
  return(
    <Modal show={show} onHide={ handleClose }>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { content }
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ handleClose }>
          Close
        </Button>
        { handleSubmit!=null &&
          <Button variant="primary" onClick={ handleSubmit }>
            Understood
          </Button>
        }
      </Modal.Footer>
    </Modal>
  )
}

export default BackdropModal

