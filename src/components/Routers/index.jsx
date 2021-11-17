import React from 'react'
import Register from '../../container/Register/register'
import Catalog from '../../container/Catalog/index'
import PutPassword from '../../container/PostPassword'
import Footer from '../Footer/Footer'
import Home from '../ForStudent/Home'
import Main from '../Main/Main'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ProtectedRoute } from '../ProtectedRoute'
import { useSelector } from 'react-redux'
import StateHeader from '../Header/StateHeader'
import { TutorForm } from '../TutorForm'
import TutorQualification from '../TutorMenu'
import TutorAddCourse from '../TutorAddCourse'
import Add from '../Admin/Coureses/Add/index'
import Edit from '../Admin/Coureses/Edit'
import Courses from '../Admin/Coureses'
import TutorApplication from '../Admin/TutorApplication'
import ViewApplication from '../Admin/TutorApplication/Edit'
import ViewInfo from '../ForStudent/FindTutor/viewInfo/ViewInfo'
import FindTutor from '../ForStudent/FindTutor/FindTutor'
import TutorSchedule from '../TutorSchedule'

export function Routers() {
	const user = useSelector((state) => state.userRedusers.user)
	const edit = useSelector((state) => state.rootReducer.editedData)

	function isAuthorized() {
		return !!user
	}
	return (
		<Router>
			<StateHeader />
			<Switch>
				<ProtectedRoute
					exact
					path='/'
					isAuthorized={!isAuthorized()}
					component={Main}
					role={user}
				/>
				<ProtectedRoute
					path='/home'
					component={Home}
					isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute
					path='/tutorQual'
					component={TutorQualification}
					isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute
					path='/tutorForm'
					component={TutorForm}
					isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute
					path='/tutorAddCourse'
					component={TutorAddCourse}
					isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute
					path='/chooseRole'
					component={Catalog}
					isAuthorized={!isAuthorized()}
				/>
				<ProtectedRoute
					path='/register'
					component={Register}
					isAuthorized={!isAuthorized()}
				/>
				<ProtectedRoute
					path='/password'
					component={PutPassword}
					isAuthorized={!isAuthorized()}
				/>
				<ProtectedRoute
					exact
					path='/admin/courses'
					component={Courses}
					isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute
					exact
					path='/admin/courses/add'
					component={Add}
					isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute
					exact
					path={'/admin/courses/edit'}
					component={Edit}
					isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute
					exact
					path='/admin/application-tutor'
					component={TutorApplication}
					isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute
					exact
					path='/admin/application-tutor/view/:userId'
					component={ViewApplication}
					isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute 
					exact 
					path='/student/findTutor/:userId' 
					component={ViewInfo} 
					isAuthorized={isAuthorized()}
				/>
          		<ProtectedRoute 
				  path='/student/findTutor' 
				  component={FindTutor} 
				  isAuthorized={isAuthorized()}
				/>
				<ProtectedRoute 
					path='/tutorSchedule' 
					component={TutorSchedule} 
					isAuthorized={isAuthorized()}
				/>
			</Switch>
			<Footer />
		</Router>
	)
}
