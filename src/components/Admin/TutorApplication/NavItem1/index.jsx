import { FaEye } from 'react-icons/fa'
import { Table } from 'react-bootstrap'
import style from './NavItem.module.scss'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getUser } from '../../../../container/httpRequest'
import { setEditTutorId } from '../../../../store/actions'

const NavItem1 = () => {
	const applications = useSelector(
		(state) => state.applicationReducers.applications,
	)

	return (
		<div className={style.nav_item_container}>
			<Table striped bordered hover size='sm'>
				<thead>
					<tr>
						<td></td>
						<td>
							<div>
								Список пользователей прошедших предквалификацию
							</div>
						</td>
						<td></td>
						<td></td>
					</tr>
				</thead>
				<thead>
					<tr>
						<td className={style.number}>
							<b>№</b>
						</td>
						<td>
							<b>Наименование</b>
						</td>
						<td>
							<b>Email</b>
						</td>
						<td>
							<b>Телефон</b>
						</td>
						<td></td>
					</tr>
				</thead>
				<tbody>
					{applications.length &&
						applications?.map((user) => (
							<tr id={user.id}>
								<td>{user.id}</td>
								<td>{user.fullName}</td>
								<td>{user.email}</td>
								<td>{user.phone}</td>
								<td>
									<Link
										to={`/admin/application-tutor/view/${user.id}`}
									>
										<FaEye />
									</Link>
								</td>
							</tr>
						))}
				</tbody>
			</Table>
		</div>
	)
}
export default NavItem1
