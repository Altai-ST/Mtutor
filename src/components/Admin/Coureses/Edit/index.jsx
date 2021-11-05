import { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { putUser } from "../../../../container/httpRequest"
import '../Add/Add.scss'

const Edit = () => {

    const history = useHistory()
	const dispatch = useDispatch()
	const editedData = useSelector(state => state.editedData)

	const [name, setName] = useState(editedData)

    const handleSubmit=()=>{
        history.push('/admin')
		dispatch(putUser({...editedData, newName: name}))
    }
	const changeHandler = (e) => setName(e.target.value)

	return (
        <div className='container'>
			<div className='card'>
				<div className='card-header'>Редактирование существующего курса</div>
				<div className='card-body'>
					<div className='row1'>
						<label className='add-label'>Наименование курса</label>
						<input className='add-input' type='text' value={name} onChange={changeHandler}/>
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
