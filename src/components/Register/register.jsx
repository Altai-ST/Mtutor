import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import style from './_register.module.scss'
import { Link } from "react-router-dom";

const Register =()=>{
    return(
        <div className={style.register}>
            <div className={style.Cards}>
               <Card>
                <Card.Header className={style.headCard}>
                    Регистрация
                    </Card.Header>
                <Card.Body>
                    <Form className='mt-2'>
                        <Form.Group>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>ФИО</Form.Label>
                                <div className={style.control}>
                                    <Form.Control type="name" placeholder="Фамилия Имя Отчество"></Form.Control>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Email</Form.Label>
                                <div className={style.control}>
                                    <Form.Control type="email" placeholder="example@gmail.com"></Form.Control>
                                </div>
                                
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.formGroup3}>
                                <Form.Label className={style.formLabel}>Моб. телефон</Form.Label>
                                <div className={style.control}>
                                    <Form.Control type="telefon"></Form.Control>
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