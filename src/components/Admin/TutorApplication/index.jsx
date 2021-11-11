import style from './TutorApplication.module.scss'
import { Tab } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import NavItem1 from '../TutorApplication/NavItem1/index'

const TutorApplication = () => {
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
