
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

const getData =()=>{
    sendHttpRequest('GET','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/role/list')
        .then(resData=>{
            console.log(resData)
        })
}
export const signup=(data)=>{
    console.log(data)
    sendHttpRequest('POST','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/auth/signup',data)
    .then(responData=>{
        console.log(responData)
    })
    // .then(responseLogin=>{
    //     localStorage.setItem('users',responseLogin)
    // })
    .catch(err=>{
        console.log(err)
    })
}

