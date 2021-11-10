import React,{useState, useEffect} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import style from './tutorForm.module.scss'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { useSelector, useDispatch } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";
import { qualification } from '../../container/httpRequest'
import { setQual } from '../../store/actions'

export const TutorForm =()=> {
    const state = useSelector(state=>state.userRedusers.user)
    const [selectedDate, setSelectedDate] = useState(new Date())
    
    const [formData, setFormData] = useState({
        fullName: state.fullName,
        birthDate: selectedDate,
        shortDescription:'',
        educationName:'',
        special:'',
        course:'',
        cost:''
    })
    useEffect(() => {
        setFormData({...formData, birthDate: selectedDate.getDate()+'.'+(selectedDate.getMonth()+1)+'.'+selectedDate.getFullYear()})
    }, [selectedDate])
    const [btnActive, setBtnActive] = useState(true)

    const option = [
        {value:'Среднее общее', label:'Среднее общее'},
        {value:'Бакалавриат', label:'Бакалавриат'},
        {value:'Специалитет', label:'Специалитет'},
        {value:'Магистратура', label:'Магистратура'},
        {value:'Аспирантура', label:'Аспирантура'},
    ]

    const handleChange=(val)=>{
        const value = val.target.value
        switch(val.target.name){
            case 'about':
                setFormData({...formData, shortDescription: value})
                break
            case 'eduPlace':
                setFormData({...formData, educationName: value})
                break
            case 'avatar':
                if(value.split(".").splice(-1,1) === 'jpg' || value.split(".").splice(-1,1) === 'png'){
                    setFormData({...formData, })
                }
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
        if(formData.shortDescription !== '' && formData.eduPlace !== '' && formData.special !== '' &&
        formData.course !=='' && formData.cost !== ''){
            setBtnActive(false)
        }
    }
    const dispatch = useDispatch()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        const res = await qualification(formData)
        console.log(res)
        dispatch(setQual(formData))
    }


    return (
        <div className={style.forms}>
            <Card>
                <Card.Body>
                    <div>
                        <Form onSubmit={handleSubmit}>
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
                                                type="fullName" placeholder="ФИО"
                                                disabled
                                                />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mt-3'>
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Дата рождения<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <DatePicker className={style.date}
                                                    name='date'
                                                    selected={selectedDate} 
                                                    onChange={setSelectedDate}
                                                    dateFormat='dd.MM.yyyy'
                                                />
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group className='mt-3'>
                                        <div className={style.formGroup}>
                                        <Form.Label className={style.formLabel}>Расскажите нам о себе<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                as='textarea'
                                                value={formData.shortDescription} 
                                                onChange={handleChange}
                                                name='about'
                                                placeholder="Расскажите нам о себе"/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3 mt-4">
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Аватар<span>*</span></Form.Label>
                                            <input onChange={handleChange} name='avatar' type="file" id="formFile" className={"form-control" + ' ' + style.files}/>
                                        </div> 
                                    </Form.Group>
                                </div>
                                <div className={style.secondBlock}>
                                    <h5>
                                        Образование
                                    </h5>
                                    <Form.Group className='mt-3'>
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Учреждение<span>*</span></Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                value={formData.educationName} 
                                                onChange={handleChange}
                                                name='eduPlace'
                                                type="input" placeholder="Введите наименование учреждения"/>
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
                                    <Form.Group>
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>
                                                Степень образования<span>*</span>
                                            </Form.Label>
                                            <div className={style.control}>
                                                <Select options={option}/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3 mt-4">
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Резюме<span>*</span></Form.Label>
                                            <input type="file" id="formFile" className={"form-control" + ' ' + style.files}/>
                                        </div> 
                                    </Form.Group>
                                </div>
                            </div>
                            <Button variant='danger' className='mx-2'>Отмена</Button>
                            <Button variant='primary' disabled={btnActive} type='submit'>Сохранить</Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
            <div>
            </div>
        </div>
    )
}


