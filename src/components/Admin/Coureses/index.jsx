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
import { deleteUser, getData } from '../../../container/httpRequest'
import {setEditId } from '../../../redux/actions'

const Courses = () => {
	const [show, setShow] = useState(false)
	const [currentId, setCurrentId] = useState(0)
	const courses = useSelector(state => state.courses)
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(getData())	
	},[])
	
	const handleDelete=(val)=>{
		console.log(val)
		dispatch(deleteUser(val))
		setShow(false)
	}
	const handlePut=(data)=>{
		dispatch(setEditId(data))
	}

	const handleDel =(val, id)=>{
		console.log(id)
		setCurrentId(id)
		if (setCurrentId !== 0){
			setShow(val)
		}
	}
	return (
		<div>
			<div className='courses-container'>
				<div className='courses-btn'>
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
						{courses !== [] &&
							courses.map(function(el){
								return <tr id={el.id}>
											<td>{el.name}</td>
											<td>
												<Link to={'/edit'}>
													{' '}
													<FaEdit onClick={() => handlePut(el)} />
												</Link>
											</td>
											<td>
												<FaTrashAlt
												onClick={()=>handleDel(true, el.id)}
												/>
												<DeleteModal
													show={show}
													onClose={() => setShow(false)}
													onClick={() => handleDelete(currentId)}
													id={currentId}
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
