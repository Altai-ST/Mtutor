import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Menu} from '../UserDropdownMenu/UserDropdownMenu'
import style from '../../assects/styles/header.module.scss'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import { useSelector } from 'react-redux';
import TutorQualification from '../TutorMenu';


function BaseHeader({ children, handleDelete }){
    const user = useSelector(state=>state.userRedusers.user)
    const [userStatus, setUserStatus] = useState(false)
    useEffect(()=>{
        if((user.status === 'waiting' || user.status === 'pending' || user.status === 'rejected') && user.role.role === 5){
            setUserStatus(true)
        }else{
            setUserStatus(false)
        } 
    },[user])
    return (
        <div>
            <Navbar className={style.nav} variant="dark">
                <Navbar.Brand>
                    {userStatus ? <Link to='/tutorQual' className={style.logo}>Mtutor</Link> : 
                        <Link to='/home' className={style.logo}>Mtutor</Link>
                    }
                </Navbar.Brand>
                <Nav className="mr-auto">
                    {!userStatus && children}
                </Nav>
                <div className={style.dropdown}>
                    <Menu handleDelete={handleDelete}/>
                </div>  
            </Navbar>
        </div>
    )
}

export default BaseHeader