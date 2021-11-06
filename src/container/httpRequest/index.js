import {setCourses,setAllCourses, deleteCourse} from '../../redux/actions'
const sendHttpRequest=(method, url, data)=>{
    console.log(method)
    const params = {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type':'application/json'}:{}
    }
    console.log(params)
    return fetch(url, params).then(response=>{
        if(response.status >= 400){
            return response.json().then(errResData=>{
                const error = new Error('Something went wrong!');
                error.data = errResData;
                throw error
            })
        }
        return response.json()
    })
}

export const getData = () => (dispatch) => {
    return sendHttpRequest('GET','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/list')
        .then(resData=>{
            return dispatch(setAllCourses(resData))
        })
        .catch(err => alert(err)) 
}

export const postUser = (name) => (dispatch) => {
    sendHttpRequest('POST','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/add',
    {
        name
    })
    .then(responseData=>{
        dispatch(getData())
    })
    .catch(err=>{
        console.log(err)
    })
}
export const deleteUser=(id)=> (dispatch) => {
    sendHttpRequest('DELETE',`http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/delete/${Number(id)}`)
    .then(responData=>{
        dispatch(getData())
    })
    .catch(err=>{
        console.log(err)
    })
}

export const putUser = (data) => (dispatch) =>{
    console.log('data',data)
    sendHttpRequest('PUT',`http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/update/${data.id}`,
    {
        name: data.newName
    })
    .then(responData=>{
        dispatch(getData())
    })
    .catch(err=>{
        console.log(err)
    })
}
