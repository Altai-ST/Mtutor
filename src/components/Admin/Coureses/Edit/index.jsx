import { useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { putUser } from "../../../../container/httpRequest"
import style from '../Add/Add.module.scss'

const Edit = () => {
    const history = useHistory()
	const dispatch = useDispatch()
	const editedData = useSelector(state => state.rootReducer.editedData)
	console.log('editData',editedData);

	const [name, setName] = useState(editedData.name)

    const handleSubmit=()=>{
        history.push('/admin/courses')
		dispatch(putUser({...editedData, newName: name}))
    }
	const changeHandler = (e) => setName(e.target.value)

	return (
        <div className={style.container}>
			<div className={style.card}>
				<div className={style.card_header}>Редактирование существующего курса</div>
				<div className={style.card_body}>
					<div className={style.row1}>
						<label className={style.add_label}>Наименование курса</label>
						<input className={style.add_input} type='text' value={name} onChange={changeHandler}/>
					</div>
					<div className={style.row2}>
                    <Button variant="success" onClick={handleSubmit}>Сохранить</Button>
                    </div>
				</div>
			</div>
		</div>
	)
}
export default Edit
