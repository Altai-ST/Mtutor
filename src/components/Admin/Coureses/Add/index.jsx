import { Button } from "react-bootstrap"
import { useHistory } from "react-router"
import './Add.scss'
import {  postUser} from '../../../../container/httpRequest/index'

const Add = () => {

    const history = useHistory()

    const handleSubmit=()=>{
        history.push('/admin')
    }
    const handlePost=()=>{
		postUser()
	}

	return (
        <div className='container'>
			<div className='card'>
				<div className='card-header'>Добавление нового курса</div>
				<div className='card-body'>
					<div className='row1'>
						<label className='add-label'>Наименование курса</label>
						<input className='add-input' type='text' />
					</div>
					<div className='row2'>
                    <Button variant="success" onClick={handleSubmit} onClick={handlePost}>Сохранить</Button>
                    </div>
				</div>
			</div>
		</div>
	)
}
export default Add
