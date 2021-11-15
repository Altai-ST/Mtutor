import {store} from '../../store/index'
import { errorToast } from '../ErrorToastify'
import { notify } from '../SuccessToastify'


const sendHttpRequest=(method, url, data=null)=>{
    const token = store.getState().userRedusers.token
    const params = {
        method: method,
        body:null,
        headers:{'Content-Type':'application/json', Authorization: 'Bearer '+token},
    }
    if (method === 'POST' || method === 'PUT'){
        params.body = JSON.stringify(data)
    }
    return fetch(url, params).then(response=>{
        if(response.status === 400){
            return response.json().then(errResData=>{
                const error = new Error('Something went wrong!');
                error.data = errResData;
                throw error
            })
        }else if(response.status === 401){
            return response.json().then(errResData=>{
                errorToast('Not Authorized!!!')
                const error = new Error('Something went wrong!');
                error.data = errResData;
                throw error
            })
        }
        return response.json()
    })
}

const getData =()=>{
    sendHttpRequest('GET','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/role/list')
        .then(resData=>{
            console.log(resData)
        })
}

export const signup=(data)=>{
    return sendHttpRequest('POST','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/auth/signup',data)
    .then(responData=>{
        return responData
    })
    .catch(err=>{
        console.log(err)
        return null
    })
}

export const signin=(data)=>{
    return sendHttpRequest('POST','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/auth/login',data)
    .then(responData=>{
        return responData
    })
    .catch(err=>{
        return null
    })
}

export const getProfileRequest=()=>{
    return sendHttpRequest('GET','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/profile/me')
        .then(resData=>{
            return resData
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
    console.log()
    return sendHttpRequest('GET', `http://ec2-18-1842-51-15.eu-central-1.compute.amazonaws.com:8000/user/get/${id}`)
        .then(resData=>{
            return resData
        })
        .catch(err=> {
            return null
        })
}