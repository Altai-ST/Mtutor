
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

export const getData =()=>{
    sendHttpRequest('GET','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/list')
        .then(resData=>{
            console.log(resData)
        })
}

export const postUser=()=>{
    sendHttpRequest('POST','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/add',
    {
        name: 'Nurperi'
    })
    .then(responData=>{
        console.log(responData)
    })
    .catch(err=>{
        console.log(err)
    })
}
export const deleteUser=()=>{
    sendHttpRequest('DELETE','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/delete/2')
    .then(responData=>{
        console.log(responData)
    })
    .catch(err=>{
        console.log(err)
    })
}

export const putUser=()=>{
    sendHttpRequest('PUT','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/subject/update/3',
    {
        name: 'Nurperi200'
    })
    .then(responData=>{
        console.log(responData)
    })
    .catch(err=>{
        console.log(err)
    })
}