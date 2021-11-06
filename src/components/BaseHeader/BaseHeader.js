import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Menu} from '../UserDropdownMenu/UserDropdownMenu'
import style from '../../assects/styles/header.module.scss'

function BaseHeader({ children }) {
    return (
        <div>
            <Navbar className={style.nav} variant="dark">
                <Navbar.Brand href="#home">
                    <Link to={'/home'} className={style.logo}>Mtutor</Link>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    {children}
                </Nav>
                <div className={style.dropdown}>
                    <Menu/> 
                </div>  
            </Navbar>
        </div>
    )
}

export default BaseHeader