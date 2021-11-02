import React from 'react'
import BaseHeader from '../BaseHeader/BaseHeader';
import style from '../../assects/styles/header.module.scss'
import { Link } from 'react-router-dom';

 const MenuList = {
    admin: [
        {
            path: '/admin',
            title: 'Курсы'
        },
        {
            path: '/admin/application-tutor',
            title: 'Заявки репетиторов'
        },
        {
            path: '/admin/users',
            title: 'Пользователи'
        }
    ],
    tutor: [
        {
            path: '/tutor/my-calendar',
            title: 'Мой календарь'
        },
        {
            path: '/tutor/my-courses',
            title: 'Мои курсы'
        },
        {
            path: '/tutor/my-students',
            title: 'Мои студенты'
        }
    ],
    student: [
        {
            path: '/student',
            title: 'Главная'
        },
        {
            path: '/student/findTutor',
            title: 'Найти репетитора'
        }
        
    ]
}

function PrivateHeader({role}) {
    console.log(role)
    return (
        <div>
            <BaseHeader>
            {MenuList[role].map(roleItem => {
                return ( 
                <Link to={roleItem.path} className={style.nav_item}>{roleItem.title}</Link>
                )
            })}
            </BaseHeader>
        </div>
    )
}

export default PrivateHeader