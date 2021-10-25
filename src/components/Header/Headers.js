import React from 'react'
import { useDispatch } from 'react-redux'
import { Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import style from './header.module.scss'

function Head() {
    const dispatch = useDispatch()
    // let title = prompt('Are you student, Tutor or admin')
    return (
        <div>
            <Navbar bg="light" variant="light" className={style.navbar}>
                <Navbar.Brand href="#home">
                    <Link className={style.Mtutor} href="#">Mtutor</Link>
                </Navbar.Brand>
                <div className={style.dropdown}> 
                        <div>
                        <Button variant="success">Войти</Button>{' '}
                        <Link href="#" className={style.sign_up} onClick={() => {
                            // let title = prompt('1, 5, 10') 
                            // if(title === 1) {
                            //     console.log('Admin')
                            // } else
                        }}>Регистрация</Link>
                        </div>
                    </div>
            </Navbar>
        </div>
    )
}

export default Head
