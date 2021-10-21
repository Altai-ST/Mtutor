import React from 'react'
import { Link } from "react-router-dom";

export const HttpRequest=(data)=>{
    const sendHttpRequest=(method, url, data)=>{
        return fetch(url,{
            Method: method,
            Body: JSON.stringify({
                email: data.email,
                password: data.password,
                role: data.role,
                phone: data.phone,
                fullName: data.fullName
            })
        }).then(response=>{
            console.log(response)
            return response.json()
        })
    }
    const getData =()=>{
        sendHttpRequest('GET','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/role/list')
            .then(resData=>{
                console.log(resData)
            })
    }

    let a=''
    const sendData=()=>{
        sendHttpRequest('POST','http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/auth/signup', data)
            .then(responData=>{
                console.log(responData)
            })
    }
    console.log(data)
    if(data.email !=='' || data.role !== ''){
        sendData()
        // getData()
    }
    return(
        <Link to='/password'>
        </Link>
    )
}

