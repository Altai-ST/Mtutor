import React from 'react'
import BaseHeader from '../BaseHeader/BaseHeader';
import style from '../../assets/styles/header.module.scss'
import { Link } from 'react-router-dom';

function HeaderForAdmin() {
    return (
        <div>
            <BaseHeader>
                <Link to={'/'} className={style.nav_item}>Курсы</Link>
                <Link to={'/findTutor'} className={style.nav_item}>Заявки репетиторов</Link>
                <Link to={'/findTutor'} className={style.nav_item}>Пользователи</Link>
            </BaseHeader>
        </div>
    )
}

export default HeaderForAdmin