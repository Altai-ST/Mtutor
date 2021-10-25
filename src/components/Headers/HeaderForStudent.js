import React, { useEffect, useRef, useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAvatar from '../../assets/image/user-avatar.png'
import style from '../../assets/styles/header.module.scss'
import UserDropdownMenu from '../UserDropdownMenu/UserDropdownMenu';

function HeaderForStudent() {
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
                <Navbar.Brand href="#home" className={style.logo}>
                    <Link to="#">Mtutor</Link>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className={style.nav_item} to={'/'}>Главная</Link>
                    <Link className={style.nav_item} to={'/findTutor'}>Найти репетитора</Link>
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

export default HeaderForStudent
