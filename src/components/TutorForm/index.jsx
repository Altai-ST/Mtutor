import React,{useState} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
// import FloatingLabel from 'react-bootstrap/FloatingLabel'
import style from './tutorForm.module.scss'

export const TutorForm =()=> {

    const [formData, setFormData] = useState({
        fullName:'',
        date:'',
        about:'',
        eduPlace:'',
        special:'',
        course:'',
        cost:''
    })

    const handleChange=(val)=>{
        const value = val.target.value
        switch(val.target.name){
            case 'fullName':
                setFormData({...formData, fullName: value})
                break
            case 'date':
                setFormData({...formData, date: value})
                break
            case 'about':
                setFormData({...formData, about: value})
                break
            case 'eduPlace':
                setFormData({...formData, eduPlace: value})
                break
            case 'special':
                setFormData({...formData, special: value})
                break
            case 'course':
                setFormData({...formData, course: value})
                break
            case 'cost':
                setFormData({...formData, cost: value})
                break
        }
    }

    return (
        <div className={style.forms}>
            <Card>
                <Card.Body>
                    <div>
                        <Form>
                            <div className={style.mainForm}>
                                <div className={style.firstBlock}>
                                    <h5>
                                        Основные данные
                                    </h5>
                                    <Form.Group>
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>ФИО<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                value={formData.fullName} 
                                                onChange={handleChange}
                                                name='fullName'
                                                type="fullName" placeholder="ФИО"/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mt-3'>
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Дата рождения<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                value={formData.date} 
                                                onChange={handleChange}
                                                name='date'
                                                type="input" placeholder=""/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mt-3'>
                                        <div className={style.formGroup}>
                                        <Form.Label className={style.formLabel}>Расскажите нам о себе<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                as='textarea'
                                                value={formData.about} 
                                                onChange={handleChange}
                                                name='about'
                                                placeholder="Расскажите нам о себе"/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <h5>
                                        Образование
                                    </h5>
                                    <Form.Group className='mt-3'>
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Учреждение<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                value={formData.eduPlace} 
                                                onChange={handleChange}
                                                name='eduPlace'
                                                type="input" placeholder="Введите намиенование учреждения"/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mt-3'>
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Факультет(Специальность)<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                value={formData.special} 
                                                onChange={handleChange}
                                                name='special'
                                                type="input" placeholder="Введите специальность"/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <div className={style.formGroup}>
                                        <Form.Group controlId="formFile" className="mb-3">
                                                <Form.Label className={style.formLabel}>Резюме<span>*</span></Form.Label>
                                                <Form.Control type="file"/>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className={style.secondBlock}>
                                    <h5>
                                        Выбор курса преподования
                                    </h5>
                                    <Form.Group className='mt-3'>
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Пожалуйста выберите курс вы собираетесь преподовать<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                value={formData.course} 
                                                onChange={handleChange}
                                                name='course'
                                                type="input" placeholder="Введите специальность"/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mt-3'>
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Цена за час(60мин) занятия в Сомах<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                value={formData.cost} 
                                                onChange={handleChange}
                                                name='cost'
                                                type="input" placeholder="Введите специальность"/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                </div>
                            </div>
                            <Button variant='danger' className='mx-2'>Отмена</Button>
                            <Button variant='primary' type='submit'>Сохранить</Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
            <div>

            </div>
        </div>
    )
}
