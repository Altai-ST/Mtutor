import style from './TutorApplication.module.scss'
import { Nav, Tab } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import NavItem1 from '../TutorApplication/NavItem1/index'
import { useEffect, useState } from 'react'
import {
	getapplication,
	putUpdateUser,
	getUser,
} from '../../../container/httpRequest'
import { useDispatch, useSelector } from 'react-redux'

const TutorApplication = () => {
	const [activeStatus, setActiveStatus] = useState('pending')
	const dispatch = useDispatch()
	const [showItem, setShowItem] = useState('pending')

	useEffect(() => {
		dispatch(getapplication(activeStatus))
	}, [])

	const onTabSelectHandler = (status) => {
		dispatch(getapplication(status))
		setActiveStatus(status)
	}

	return (
		<div>
			<div className={style.container}>
				<Tabs
					id='1'
					activeKey={activeStatus}
					onSelect={onTabSelectHandler}
					className='mb-3'
				>
					<Tab eventKey='pending' title='Не просмотренные'>
						{showItem === 'pending'}
						<NavItem1 />
					</Tab>
					<Tab eventKey='confirmed' title='Одобренные'>
						{}
						<NavItem1 />
					</Tab>
					<Tab eventKey='rejected' title='Отклоненные'>
						<NavItem1 />
					</Tab>
				</Tabs>
			</div>
		</div>
	)
}

export default TutorApplication
