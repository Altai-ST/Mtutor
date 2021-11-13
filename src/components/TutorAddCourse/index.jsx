import React, { useState, useEffect } from 'react'
import { Card, Form, Button } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import Select from 'react-select'
import style from './tutorAddCouse.module.scss'
import { getData, saveTutorCourse } from '../../container/httpRequest';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
export default function TutorAddCourse() {
    const [coursSelect, setCoursSelect] = useState({
        subjectId:'',
        price:'',
    })
    const [btnActive, setBtnActive] = useState(true)
    const dispatch = useDispatch()
    const courses = useSelector(state => state.rootReducer.courses)
    const history = useHistory()

    useEffect(() => {
		dispatch(getData())
	}, [])

    const option= courses.length && courses.map((el)=>({
        value: el.id, label:el.name
    }))

    const check = ()=>{
        if(coursSelect.subjectId !== '' && coursSelect.price !== ''){
            setBtnActive(false)
        }else{
            setBtnActive(true)
        }
    }

    const handleSelect =(val)=>{
        setCoursSelect({...coursSelect, subjectId: Number(val.value)})
        check()
    }
    
    const handleChange = (val)=>{
        setCoursSelect({...coursSelect, price: Number(val.target.value)})
        check()
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(saveTutorCourse(coursSelect))
        history.push('/tutorQual')
    }
    return (
        <div className={style.addCourse}>
            <Card className={style.cards}>
                <Card.Header className={style.headCard}>
                    Выбор курса преподования
                    </Card.Header>
                <Card.Body>
                    <Form className='mt-2' onSubmit={handleSubmit}>
                        <Form.Group>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Пожалуйста выберите курс вы собираетесь преподовать</Form.Label>
                                <div className={style.control}>
                                    <Select onChange={handleSelect} options={option}/>
                                </div>
                            </div>
                        </Form.Group>
                        <Form.Group className='mt-3'>
                            <div className={style.formGroup}>
                                <Form.Label className={style.formLabel}>Цена за час(60мин) занятия в Сомах</Form.Label>
                                <div className={style.control}>
                                    <Form.Control onChange={handleChange}/>
                                </div>
                            </div>
                        </Form.Group>
                        <Button variant='danger' className='mx-2'><Link to='/tutorQual'>Отмена</Link></Button>
                        <Button variant='primary' disabled={btnActive} type='submit'>Сохранить</Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
