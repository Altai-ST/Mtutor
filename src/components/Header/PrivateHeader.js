import React, { useState } from 'react'
import BaseHeader from '../BaseHeader/BaseHeader';
import style from '../../assects/styles/header.module.scss'
import { Link } from 'react-router-dom';
import { USER_STORE } from '../../util/constants/keys';
import {deleteLocalStorage} from '../../util/constants/localStorage'
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../store/actions';

 const MenuList = {
    admin: [
        {
            path: '/admin/courses',
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
            path: '/home',
            title: 'Главная'
        },
        {
            path: '/student/findTutor',
            title: 'Найти репетитора'
        }
        
    ]
}

function PrivateHeader({role}) {
    const dispatch = useDispatch()
    const history = useHistory()
    const handleDelete=()=>{
        deleteLocalStorage(USER_STORE)
        dispatch(saveUser(''))
        history.push('/')
    }
    return (
        <div>
            <BaseHeader handleDelete={handleDelete}>
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