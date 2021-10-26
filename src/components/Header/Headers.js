import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { LoginContent } from '../LoginContent'
import style from './header.module.scss'

function Head() {
    return (
        <div>
            <Navbar bg="light" variant="light" className={style.navbar}>
                <Navbar.Brand href="#home">
                    <Link className={style.Mtutor} to='/'>Mtutor</Link>
                </Navbar.Brand>
                <div className={style.dropdown}> 
                        <div className={style.btnGroub}>
                            <LoginContent className={style.btn1}/>
                            <Link to='/chooseRole' className={style.sign_up} >Регистрация</Link>
                        </div>
                    </div>
            </Navbar>
            {/* <Link to={'/admin'}>
            <button>Admin</button>
            </Link>
            <Link to={'/tutor'}>
            <button>Tutor</button>
            </Link>
            <Link to={'/student'}>
            <button>student</button>
            </Link> */}
        </div>
    )
}

export default Head
