import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import style from './Courses.module.scss'
import { FaEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DeleteModal from './DeleteModal'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getData } from '../../../container/httpRequest'
import { setEditId } from '../../../store/actions'
import { useHistory } from 'react-router'

const Courses = () => {
	const [show, setShow] = useState(false)
	const [currentId, setCurrentId] = useState(0)
	const courses = useSelector((state) => state.rootReducer.courses)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getData())
	}, [])
	const history = useHistory()

	const handleDelete = () => {
		dispatch(deleteUser(currentId))
		setShow(false)
	}

	const handleDel = (id) => {
		setCurrentId(id)
		setShow(true)
	}
	const setEditElem = (item) => {
		dispatch(setEditId(item))
		history.push('/admin/courses/edit')
	}
	return (
		<div>
			<DeleteModal
				show={show}
				onClose={() => setShow(false)}
				onSuccess={() => handleDelete(currentId)}
				id={currentId}
			/>

			<div className={style.courses_container}>
				<div className={style.courses_btn}>
					<Link to={'/admin/courses/add'}>
						<Button variant='success'>Добавить</Button>{' '}
					</Link>
				</div>
				<Table striped bordered hover size='sm'>
					<thead>
						<tr>
							<td>
								<div>Список всех предметов</div>
								<div></div>
							</td>
						</tr>
					</thead>
					<thead>
						<tr>
							<td>
								<b>Наименование</b>
							</td>
						</tr>
					</thead>
					<tbody>
						{courses.length &&
							courses?.map((el) =>  (
									<tr id={el.id}>
										<td>{el.name}</td>
										<td>
												<FaEdit onClick={() => setEditElem(el)}/>
										</td>
										<td>
											<FaTrashAlt
												onClick={() => handleDel(el.id)}
											/>
										</td>
									</tr>
								)
							)}
					</tbody>
				</Table>
			</div>
		</div>
	)
}
export default Courses
