import style from './TutorApplication.module.scss'
import { Tab } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import NavItem1 from '../TutorApplication/NavItem1/index'
import { useEffect } from 'react'
import { getapplication } from '../../../container/httpRequest'
import { useDispatch } from 'react-redux'

const TutorApplication = () => {
	const dispatch = useDispatch()
	function func() {
		fetch('http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/applicants?status=pending',{
			method: 'GET',
			headers: {Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…DI4fQ.X41P9jbfcKA5A5FJEV0qSKB1IYDs1H-JiA-0AoESfK4'}
		}).then(res => res.json).then(response => console.log('response =>', response)).catch(err => console.log(err))
	}
	useEffect(() => {
		func()
	},[])
	return (
		<div>
			<div className={style.container}>
				<Tabs
					defaultActiveKey='profile'
					id='uncontrolled-tab-example'
					className='mb-3'
				>
					<Tab eventKey='home' title='Не просмотренные'>
						<NavItem1 />
					</Tab>
					<Tab eventKey='profile' title='Одобренные'>
						<NavItem1 />
					</Tab>
					<Tab eventKey='contact' title='Отклоненные'>
						<NavItem1/>
					</Tab>
				</Tabs>
			</div>
		</div>
	)
}

export default TutorApplication
