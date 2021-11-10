import { Button } from "react-bootstrap"
import { useHistory } from "react-router"
import style from './Add.module.scss'
import {  postUser } from '../../../../container/httpRequest/index'
import {useDispatch} from 'react-redux'
import { useState } from "react"

const Add = () => {
	const dispatch = useDispatch()
    const history = useHistory()
	const [inputValue, setInputValue] = useState('')

    const handleSubmit=()=>{
        history.push('/admin/courses')
		dispatch(postUser(inputValue))
    }
    const changeHandler = (e) => setInputValue(e.target.value)

	return (
        <div className={style.container}>
			<div className={style.card}>
				<div className={style.card_header}>Добавление нового курса</div>
				<div className={style.card_body}>
					<div className={style.row1}>
						<label className={style.add_label}>Наименование курса</label>
						<input className={style.add_input} type='text' value={inputValue} onChange={changeHandler}/>
					</div>
					<div className={style.row2}>
                    <Button variant="success" onClick={handleSubmit} >Сохранить</Button>
                    </div>
				</div>
			</div>
		</div>
	)
}
export default Add
