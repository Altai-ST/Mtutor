import { store } from '../../store/index'
import { errorToast } from '../ErrorToastify'
import {setAllCourses} from '../../store/actions'
import { saveTutorCourses } from '../../store/actions'
import { setApplication } from '../../store/actions'

const sendHttpRequest = (method, url, data = null, avatar = null) => {
	const token = store.getState().userRedusers.token
	const params = {
		method: method,
		body: null,
		headers: {
			'Content-Type': 'application/json',
			Authorization: 'Bearer ' + token,
		},
	}
	if ((method === 'POST' && avatar === null) || method === 'PUT') {
		params.body = JSON.stringify(data)
	}
	if (avatar === 'avatar' && method === 'POST') {
		console.log(data)
		const formData = new FormData()
		formData.append('file', data)
		params.body = formData
		params.headers = { Authorization: 'Bearer ' + token }
	}
	console.log(params)
	return fetch(url, params).then((response) => {
		if (response.status === 400) {
			return response.json().then((errResData) => {
				const error = new Error('Something went wrong!')
				error.data = errResData
				throw error
			})
		} else if (response.status === 401) {
			return response.json().then((errResData) => {
				errorToast('Not Authorized!!!')
				const error = new Error('Something went wrong!')
				error.data = errResData
				throw error
			})
		}
		return response.json()
	})
}

export const getData = () => (dispatch) => {
	return sendHttpRequest(
		'GET',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/list',
	)
		.then((resData) => {
			return dispatch(setAllCourses(resData))
		})
		.catch((err) => alert(err))
}

export const postUser = (name) => (dispatch) => {
	sendHttpRequest(
		'POST',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/add',
		{
			name,
		},
	)
		.then((responseData) => {
			dispatch(getData())
		})
		.catch((err) => {
			console.log(err)
		})
}
export const deleteUser = (id) => (dispatch) => {
	sendHttpRequest(
		'DELETE',
		`http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/delete/${Number(
			id,
		)}`,
	)
		.then((responData) => {
			dispatch(getData())
		})
		.catch((err) => {
			console.log(err)
		})
}

export const putUser = (data) => (dispatch) => {
	console.log('data', data)
	sendHttpRequest(
		'PUT',
		`http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/update/${data.id}`,
		{
			name: data.newName,
		},
	)
		.then((responData) => {
			dispatch(getData())
		})
		.catch((err) => {
			console.log(err)
		})
}

export const signup = (data) => {
	return sendHttpRequest(
		'POST',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/auth/signup',
		data,
	)
		.then((responData) => {
			return responData
		})
		.catch((err) => {
			console.log(err)
			return null
		})
}

export const signin = (data) => {
	return sendHttpRequest(
		'POST',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/auth/login',
		data,
	)
		.then((responData) => {
			console.log(responData)
			return responData
		})
		.catch((err) => {
			return null
		})
}

export const getProfileRequest = () => {
	return sendHttpRequest(
		'GET',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/profile/me',
	)
		.then((resData) => {
			return resData
		})
		.catch((err) => {
			return null
		})
}

export const qualification = (data) => {
	return sendHttpRequest(
		'POST',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/prequalification/profile/save',
		data,
	)
		.then((responData) => {
			return responData
		})
		.catch((err) => {
			return null
		})
}

export const setAvatar = (FormData) => {
	return sendHttpRequest(
		'POST',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/prequalification/upload/avatar',
		FormData,
		'avatar',
	)
		.then((responData) => {
			return responData
		})
		.catch((err) => {
			return null
		})
}

export const saveTutorCourse = (value) => (dispatch) => {
	return sendHttpRequest(
		'POST',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/prequalification/course/save',
		value,
	)
		.then((responData) => {
			return dispatch(saveTutorCourses(true))
		})
		.catch((err) => {
			return null
		})
}

export const setResume = (FormData) => {
	return sendHttpRequest(
		'POST',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/prequalification/upload/resume',
		FormData,
		'avatar',
	)
		.then((responData) => {
			return responData
		})
		.catch((err) => {
			return null
		})
}

export const getapplication = (status='pending') => (dispatch) => {
	return sendHttpRequest(
		'GET',
		`http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/applicants?status=${status}`,
	)
		.then((resData) => {
			console.log(resData)
			return dispatch(setApplication(resData))
		})
		.catch((err) => console.log(err))
}

export const getUser = (id)  => {
	console.log(id)
	return sendHttpRequest(
		'GET',
		`http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/get/${id}`,

	)
		.then((resData) => {
			console.log(resData)
			return resData
		})
		.catch((err) => console.log(err))	
}
export const setSchedule =(data)=>{
    return sendHttpRequest('POST','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/prequalification/schedule/save',data)
    .then(responData => {
        return responData
    })
    .catch(err=>{
        return null
    })
}

export const setStatus =(data)=>{
    const user = store.getState().userRedusers.user
    return sendHttpRequest('PUT','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/'+user.id+'/status',data)
    .then(responData => {
        return responData
    })
    .catch(err=>{
        return null
    })
}

export const getSearchingSubjectRequest=(inputValue)=>{
    return sendHttpRequest('GET',`http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/list?name=${inputValue}`)
        .then(responseData=>{
            return responseData
        })
        .catch(err=>{ 
            console.log(err)
            return null
        })
}

export const getTutorsBySubjectRequest=(subjectId)=>{
    return sendHttpRequest('GET', `http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/tutors/${subjectId}`)
        .then(responData=>{
            return responData
        })
        .catch(err=>{
            return null
        })
}

export const getTutorDetailInfoRequest = (id) => {
    console.log(id)
    return sendHttpRequest('GET', `http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/get/${id}`)
        .then(resData=>{
            return resData
        })
        .catch(err=> {
            return null
        })
}

export const putUpdateUser = (id, status) => {
	return sendHttpRequest(
		'PUT',
		`http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/${id}/status`,
        
		{status}
           
	)
		.then((resData) => {
			console.log(resData)
			return resData
		})
		.catch((err) => console.log(err))
}
