import React, { useState } from 'react'
import { Card, Form, Button } from "react-bootstrap";
import Select from 'react-select'
import style from './tutorAddCouse.module.scss'
export default function TutorAddCourse() {

    const [coursSelect, setCoursSelect] = useState({
        cours:'',
        cost:'',
    })

    const option=[{
        
    }]

    const handleSelect =(val)=>{
        setCoursSelect({...coursSelect, cours: val.value})
    }
    const handleSubmit =()=>{

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
                                    <Form.Control/>
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}
