import React, {useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import UserAvatar from '../../assets/image/user-avatar.png'
import style from '../../assets/styles/header.module.scss'
import UserDropdownMenu from '../UserDropdownMenu/UserDropdownMenu';

function HeaderForStudent(props) {
    const [open, setOpen] = useState(false)


    return (
        <div>
            <Navbar className={style.myColor} variant="dark">
                <Navbar.Brand href="#home" className={style.logo}>
                    <a className={style.hj} href="#">Mtutor</a>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Главная</Nav.Link>
                    <Nav.Link href="#searchTutor">Найти репетитора</Nav.Link>
                </Nav>
                <div className={style.dropdown}>
                    <a href="#" onClick={() => setOpen(true)}>
                        <img className={style.userAvatar} src={UserAvatar} />
                    </a>
                </div>
                <UserDropdownMenu open={open}/>
            </Navbar>
        </div>
    )
}

export default HeaderForStudent
