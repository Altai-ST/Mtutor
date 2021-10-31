const sendHttpRequest=(method, url, data)=>{
    const params = {
        method: method,
        body: JSON.stringify(data),
        headers: data ? {'Content-Type':'application/json'}: {},
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
        console.log(err)
        return null
    })
}

export const getProfileRequest=(token)=>{
    const tokens = JSON.parse(token).token
    console.log(tokens)
    sendHttpRequest('GET','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/user/profile/me')
        .then(resData=>{
            console.log(resData)
        })
}