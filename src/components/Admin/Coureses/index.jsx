import Table from 'react-bootstrap/Table'
import { Button } from 'react-bootstrap'
import '../Coureses/Courses.scss'
import Pagination from 'react-bootstrap/Pagination'
import { FaEdit } from 'react-icons/fa'
import { FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import DeleteModal from './DeleteModal'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, getData, postUser, putUser } from '../../../container/httpRequest'
import { setEditId } from '../../../redux/actions'

const Courses = () => {

	
	const [show, setshow] = useState(false)
	const courses = useSelector(state => state.courses)
	const dispatch = useDispatch()
	
	useEffect(() => {
		// dispatch(getData())	
	},[])
	
	const handleDelete=(id)=>{
		dispatch(deleteUser(id))
		setshow(false)
	}
	const handlePut=(data)=>{
		dispatch(setEditId(data))
	}

	return (
		<div>
			<div class='courses-container'>
				<div class='courses-btn'>
					<Link to={'/add'}>
						{' '}
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
						{courses.map(el => {
							return <tr key={el.doc.id}>
							<td>{el.doc.name}</td>
							<td>
								<Link to={'/edit'}>
									{' '}
									<FaEdit onClick={() => handlePut(el)} />
								</Link>

							</td>
							<td>
								<FaTrashAlt onClick={() => setshow(true)} />
								<DeleteModal
									show={show}
									onClose={() => setshow(false)}
									deleteFunction={handleDelete}
									id={el.doc.id}
								/>
							</td>
						</tr>
						})}
					</tbody>
				</Table>
				<div class='courses-pagination'>
					<Pagination>
						<Pagination.First />
						<Pagination.Prev />
						<Pagination.Item>{1} </Pagination.Item>
						<Pagination.Ellipsis />
						<Pagination.Item>{25} </Pagination.Item>
						<Pagination.Next />
						<Pagination.Last />
					</Pagination>
				</div>
			</div>
		</div>
	)
}
export default Courses
