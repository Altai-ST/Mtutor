import React from 'react'
import BaseHeader from '../BaseHeader/BaseHeader';
import style from '../../assects/styles/header.module.scss'
import { Link } from 'react-router-dom';

function HeaderForTutor() {
    return (
        <div>
            <BaseHeader>
                <Link to={'/'} className={style.nav_item}>Мой календарь</Link>
                <Link to={'/findTutor'} className={style.nav_item}>Мои курсы</Link>
                <Link to={'/findTutor'} className={style.nav_item}>Мои студенты</Link>
            </BaseHeader>
        </div>
    )
}

export default HeaderForTutor