import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAvatar from '../../assets/image/user-avatar.png'
import style from '../../assets/styles/header.module.scss'
import UserDropdownMenu from '../UserDropdownMenu/UserDropdownMenu';

function BaseHeader({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        };
        document.addEventListener("click", checkIfClickedOutside);
        return () => {
            document.addEventListener("click", checkIfClickedOutside);
        };
    }, [isMenuOpen])


    return (
        <div>
            <Navbar className={style.myColor} variant="dark">
                <Navbar.Brand href="#home">
                    <Link className={style.logo} to="#">Mtutor</Link>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    {children}
                </Nav>
                    <Link className={style.dropdown} to={'/account'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <img className={style.userAvatar} src={UserAvatar} />
                    </Link>   
                { isMenuOpen && (
                    <UserDropdownMenu/>
                )} 
            </Navbar>
        </div>
    )
}

export default BaseHeader