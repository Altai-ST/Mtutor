import { Button } from "react-bootstrap"
import { useHistory } from "react-router"
import './Add.scss'
import {  postUser } from '../../../../container/httpRequest/index'
import {useDispatch} from 'react-redux'
import { useState } from "react"

const Add = () => {
	const dispatch = useDispatch()
    const history = useHistory()
	const [inputValue, setInputValue] = useState('')

    const handleSubmit=()=>{
        history.push('/admin')
		dispatch(postUser(inputValue))
    }
    const changeHandler = (e) => setInputValue(e.target.value)

	return (
        <div className='container'>
			<div className='card'>
				<div className='card-header'>Добавление нового курса</div>
				<div className='card-body'>
					<div className='row1'>
						<label className='add-label'>Наименование курса</label>
						<input className='add-input' type='text' value={inputValue} onChange={changeHandler}/>
					</div>
					<div className='row2'>
                    <Button variant="success" onClick={handleSubmit} >Сохранить</Button>
                    </div>
				</div>
			</div>
		</div>
	)
}
export default Add
