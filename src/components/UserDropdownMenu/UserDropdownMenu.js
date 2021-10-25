import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaWrench } from "react-icons/fa"
import { FaLock } from "react-icons/fa"
import style from './dropMenu.module.scss'

function UserDropdownMenu() {
    return (
        <>
            <div className={style.dropdown_menu}>
                    <div className={style.dropdown_header}>
                        <strong>
                            example@gmail.com
                        </strong>
                        <br />
                        example@gmail.com
                    </div>
                    <a href="#" className={style.dropdown_item}>
                        <FaUser />
                        Мой аккаунт</a>
                    <button className={style.dropdown_item}>
                        <FaWrench />
                        Настройка
                    </button>
                    <button className={style.dropdown_item}>
                        <FaLock />
                        Выйти
                    </button>
                </div>
        </>
    )
}

export default UserDropdownMenu
