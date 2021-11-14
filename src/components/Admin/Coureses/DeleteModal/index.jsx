// import { useHistory } from "react-router"
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {BiErrorCircle} from "react-icons/bi";

const DeleteModal = (props) => {
	return (
		<Modal
			{...props}
			size='lg'
			aria-labelledby='contained-modal-title-vcenter'
			centered
		>
			<Modal.Header >
				<Modal.Title id='contained-modal-title-vcenter'>
                <BiErrorCircle/>
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<p>Вы действительно хотите удалить?</p>
			</Modal.Body>
			<Modal.Footer>
				<Button variant="success" onClick={props.onSuccess}>Да</Button>
                <Button variant="secondary" onClick={props.onClose}>Отмена</Button>
			</Modal.Footer>
		</Modal>
	)
}


export default DeleteModal
