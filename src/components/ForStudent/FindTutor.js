import React from 'react'
import style from './findTutor.module.scss'
import { Button } from 'react-bootstrap'

export const FindTutor = () => {
    return (
        <div className={style.content}>
            <div className={style.search}>
                <input placeholder='Поиск' className={style.inputSearch}/>
                <Button variant="success" className={style.btnSearch}>Найти</Button>{' '}
            </div>
                <h2>Пожалуйста выберите нужный вам курс или предмет</h2>
        </div>
    )
}