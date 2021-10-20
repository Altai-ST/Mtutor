import React from 'react';
import { Card, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from './_putPassword.module.scss'

const PutPassword =()=>{
    return(
        <div className={style.register}>
            <div className={style.Cards}>
               <Card>
                <Card.Header className={style.headCard}>
                    Регистрация
                    </Card.Header>
                <Form className='mt-2'>
                <Card.Body>
                    <div className={style.header}>
                        <h5>Для завершения регистрации введите пароль</h5>
                    </div>
                    
                        <Form.Group className={style.formBlock}>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Пароль</Form.Label>
                                <div className={style.control}>
                                    <Form.Control type="name"></Form.Control>
                                </div>
                                <small>Не менее 6 символов (букв, цифр)</small>
                            </div>
                        </Form.Group>
                        <Form.Group className={style.formBlock+' '+'mt-3'}>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Подтвердите пароль</Form.Label>
                                <div className={style.control}>
                                    <Form.Control type="email"></Form.Control>
                                </div>
                                
                            </div>
                        </Form.Group>
                    
                </Card.Body>
                <Card.Footer className='mt-3'>
                    <div className={style.btnGroup}>
                        <Link to='/Login'>
                            <Button className={style.btn}>Зарегистрировать</Button>
                        </Link>
                    </div>
                </Card.Footer>
                </Form>
            </Card> 
            </div>
            
            
        </div>
    )
}

export default PutPassword