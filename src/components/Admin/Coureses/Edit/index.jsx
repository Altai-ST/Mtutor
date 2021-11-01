import { Button } from "react-bootstrap"
import { useHistory } from "react-router"
import '../Add/Add.scss'

const Edit = () => {

    const history = useHistory()

    const handleSubmit=()=>{
        history.push('/admin')
    }

	return (
        <div className='container'>
			<div className='card'>
				<div className='card-header'>Редактирование существующего курса</div>
				<div className='card-body'>
					<div className='row1'>
						<label className='add-label'>Наименование курса</label>
						<input className='add-input' type='text' />
					</div>
					<div className='row2'>
                    <Button variant="success" onClick={handleSubmit}>Сохранить</Button>
                    </div>
				</div>
			</div>
		</div>
	)
}
export default Edit
