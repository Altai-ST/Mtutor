import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAvatar from '../../assects/image/user-avatar.png'
import style from '../../assects/styles/header.module.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'


function BaseHeader({ children, handleDelete }) {
    
    return (
        <div>
            <Navbar className={style.nav} variant="dark">
                <Navbar.Brand href="#home">
                    <Link to={'/home'} className={style.logo}>Mtutor</Link>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    {children}
                </Nav>
                <div className={style.con}>
                    {/* <Link className={style.dropdown} to={'/account'}>
                        <img className={style.userAvatar} src={UserAvatar} />
                    </Link>  */}
                    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Мой аккаунт</Dropdown.Item>
                        <Dropdown.Item onClick={handleDelete}>Выйти</Dropdown.Item>
                    </DropdownButton>
                </div>  
            </Navbar>
        </div>
    )
}

export default BaseHeader