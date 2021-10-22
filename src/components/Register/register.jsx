import React, { useEffect, useState } from "react";
import { Card, Form, Button } from "react-bootstrap";
import style from './_register.module.scss'
import { Link } from "react-router-dom";
import PutPassword from "../PostPassword";
const Register =()=>{

    const [formData, setFormData] = useState({
        email:'',
        phone:'',
        fullName:'',
        role:'',
    })


    const hadleSubmit=(e)=>{
        e.preventDefault()
        console.log(formData)
        PutPassword(formData)
    }
    
    const hadleChange=(val)=>{
        if(val.target.name == 'email'){
            setFormData({...formData, email: val.target.value})
        }else if(val.target.name == 'phone'){
            setFormData({...formData, phone: val.target.value})
        }else if(val.target.name =='fullName'){
            setFormData({...formData, fullName: val.target.value})
        }
    }

    let status = useEffect(()=>{
        console.log(formData)
    },[formData])

    return(
        <div className={style.register}>
            <div className={style.Cards}>
               <Card>
                <Card.Header className={style.headCard}>
                    Регистрация
                    </Card.Header>
                <Card.Body>
                    <Form className='mt-2' onSubmit={hadleSubmit}>
                        <Form.Group>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>ФИО</Form.Label>
                                <div className={style.control}>
                                    <Form.Control 
                                    value={formData.fullName} 
                                    onChange={e=>hadleChange(e)}
                                    name='fullName'
                                     type="fullName" placeholder="Фамилия Имя Отчество"></Form.Control>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Email</Form.Label>
                                <div className={style.control}>
                                    <Form.Control onChange={e=>hadleChange(e)} value={formData.email} 
                                    type="email"
                                    name='email'
                                    placeholder="example@gmail.com"></Form.Control>
                                </div>
                                
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.formGroup3}>
                                <Form.Label className={style.formLabel}>Моб. телефон</Form.Label>
                                <div className={style.control}>
                                    <Form.Control
                                     value={formData.phone} 
                                     onChange={e=>hadleChange(e)}
                                     name='phone'
                                     type="phone"></Form.Control>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.btnGroup}>
                                <Link to='/password'>
                                    <Button className={style.btn}>Подтвердить</Button>
                                </Link>
                                <Link to='/'>
                                    <Button className={style.btn}>Отмена</Button>
                                </Link>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card> 
            </div>
        </div>
    )
}

export default Register