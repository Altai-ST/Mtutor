import React from 'react'
import BaseHeader from '../BaseHeader/BaseHeader';
import style from '../../assects/styles/header.module.scss'
import { Link } from 'react-router-dom';

function HeaderForStudent() {
    return (
        <div>
            <BaseHeader>
                <Link className={style.nav_item} to={'/home'}>Главная</Link>
                <Link className={style.nav_items} to={'/findTutor'}>Найти репетитора</Link>
            </BaseHeader>
        </div>
    )
}

export default HeaderForStudent
