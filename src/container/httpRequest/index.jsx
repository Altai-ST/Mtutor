import { setApplication } from '../../redux/actions'
import { store } from '../../redux'

const sendHttpRequest = (method, url, data = null) => {
	const token = store.getState().userRedusers.token
	console.log(token)
	const params = {
		method: method,
		body: null,
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	}
	if (method === 'POST' || method === 'PUT') {
		params.body = JSON.stringify(data)
	}
	return fetch(url, params).then((response) => {
		if (response.status === 400) {
			return response.json().then((errResData) => {
				const error = new Error('Something went wrong!')
				error.data = errResData
				throw error
			})
		} else if (response.status === 401) {
			return response.json().then((errResData) => {
				// errorToast('Not Authorized!!!')
				const error = new Error('Something went wrong!')
				error.data = errResData
				throw error
			})
		}
		return response.json()
	})
}
// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…DI4fQ.X41P9jbfcKA5A5FJEV0qSKB1IYDs1H-JiA-0AoESfK4
const getData = () => {
	sendHttpRequest(
		'GET',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/role/list',
	).then((resData) => {
		// console.log(resData)
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
			// console.log(err)
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
			return responData
		})
		.catch((err) => {
			// console.log(err)
			return null
		})
}

export const getProfileRequest = (token) => {
	const tokens = JSON.parse(token).token
	console.log(tokens)
	sendHttpRequest(
		'GET',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/profile/me',
	).then((resData) => {
		// console.log(resData)
	})
}

export const getapplication = () => (dispatch) => {
	return sendHttpRequest(
		'GET',
		'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/applicants?status=pending',
	)
		.then((resData) => {
			console.log(resData)
			return dispatch(setApplication(resData))
		})
		.catch((err) => console.log(err))
}
