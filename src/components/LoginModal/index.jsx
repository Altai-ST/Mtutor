import React from "react";
import { Button, Card, Form } from "react-bootstrap";


const LoginModal=()=>{
    return(
        <div style={
            {
                width:'1440px',
        }}>
            <Card style={{width:'540px', margin:'0 auto'}} className='mt-5'>
                <Card.Header className='p-0'>
                    <div>
                        <h5 style={{color:'black'}} className={'mt-3'+' '+'mx-3'}>Введите Ваш логин и пароль</h5>
                        <span>X</span>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <span></span>
                            <Form.Control type='email' placeholder='Email'></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <span></span>
                            <Form.Control type='password' placeholder='Password'></Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer>
                    <Button>Вход</Button>
                    <a href="#">Забыли пароль?</a>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default LoginModal