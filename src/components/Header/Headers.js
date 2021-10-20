import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import style from './header.module.scss'

function Head() {
    return (
        <div>
            <Navbar bg="light" variant="light" className={style.navbar}>
                <Navbar.Brand href="#home">
                    <a className={style.Mtutor} href="#">Mtutor</a>
                </Navbar.Brand>
                <div className={style.dropdown}> 
                        <div>
                        <Button variant="success">Войти</Button>{' '}
                        <a href="#" className={style.sign_up}>Регистрация</a>
                        </div>
                    </div>
            </Navbar>
        </div>
    )
}

export default Head
