import { FaEye } from 'react-icons/fa'
import { Table } from 'react-bootstrap'
import style from './NavItem.module.scss'
import { Link } from 'react-router-dom'

const NavItem1 = () => {
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
					<tr>
						<td className={style.number}></td>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<Link to={'/tutorapplication/edit'}>
								<FaEye />
							</Link>
						</td>
					</tr>
					<tr>
						<td style={style.number}></td>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<Link to={'/tutorapplication/edit'}>
								<FaEye />
							</Link>
						</td>
					</tr>
					<tr>
						<td className={style.number}></td>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<Link to={'/tutorapplication/edit'}>
								<FaEye />
							</Link>
						</td>
					</tr>
					<tr>
						<td className={style.number}></td>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<Link to={'/tutorapplication/edit'}>
								<FaEye />
							</Link>
						</td>
					</tr>
					<tr>
						<td className={style.number}></td>
						<td></td>
						<td></td>
						<td></td>
						<td>
							<Link to={'/tutorapplication/edit'}>
								<FaEye />
							</Link>
						</td>
					</tr>
				</tbody>
			</Table>
		</div>
	)
}
export default NavItem1
