import React,{useState, useEffect} from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import style from './tutorForm.module.scss'
import Select from 'react-select'
import DatePicker from 'react-datepicker'
import { useSelector, useDispatch } from 'react-redux'
import "react-datepicker/dist/react-datepicker.css";
import { qualification, setAvatar, setResume } from '../../container/httpRequest'
import { saveFormTutor, setQual } from '../../store/actions'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
export const TutorForm =()=> {
    const state = useSelector(state=>state.userRedusers.user)
    const [selectedDate, setSelectedDate] = useState(new Date())
    
    const [formData, setFormData] = useState({
        fullName: state.fullName,
        birthDate: selectedDate,
        shortDescription:'',
        educationName:'',
        educationFaculty:'',
        educationDegree:'',
        resume:'',
        avatar:''
    })

    const [showAvatar, setShowAvatar] = useState(false)

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
    const history = useHistory()
    const handleChange=(val)=>{
        const value = val.target.value
        switch(val.target.name){
            case 'about':
                setFormData({...formData, shortDescription: value})
                break
            case 'eduPlace':
                setFormData({...formData, educationName: value})
                break
            case 'special':
                setFormData({...formData, educationFaculty: value})
                break
        }
        console.log(formData)
        if(formData.shortDescription !== '' && formData.educationName !== '' && formData.educationDegree !== '' &&
        formData.resume !=='' && formData.avatar !== ''){
            setBtnActive(false)
        }
    }
    const handleSelect =(val)=>{
        setFormData({...formData, educationDegree: val.value})
        if(formData.shortDescription !== '' && formData.educationName !== '' && formData.educationDegree !== '' &&
        formData.resume !=='' && formData.avatar !== ''){
            setBtnActive(false)
            
        }
    }

    const dispatch = useDispatch()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        let formDataRequest = formData
        delete formDataRequest.educationFaculty
        const res = await qualification(formDataRequest)
        console.log(res)
        dispatch(setQual(formData))
        dispatch(saveFormTutor(true))
        if(res){
            history.push('/tutorQual')
        }
    }
    const handleImg = async (val) =>{
        const value = val.target.value.split(".").splice(-1,1)[0]
        if(value === 'jpg' || value === 'png'){
            const res = await setAvatar(val.target.files[0])
            if(res){
                setFormData({...formData, avatar: res.fileUrl})
                setShowAvatar(true)
            }
        }
        if(value === 'pdf'){
            const res = await setResume(val.target.files[0])
            if(res){
                setFormData({...formData, resume: res.fileUrl})
            }
        }
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
                                            <input onChange={handleImg} name='avatar' type="file" id="formFile" className={"form-control" + ' ' + style.files}/>
                                        </div> 
                                    </Form.Group>
                                    {showAvatar && <img src={'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/'+formData.avatar}/>}
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
                                            <Form.Label className={style.formLabel}>Факультет(Специальность)</Form.Label>
                                            <div className={style.control}>
                                                <Form.Control 
                                                value={formData.educationFaculty} 
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
                                            <div className={style.control} >
                                                <Select onChange={handleSelect} options={option}/>
                                            </div>
                                        </div>
                                    </Form.Group>
                                    <Form.Group controlId="formFile" className="mb-3 mt-4">
                                        <div className={style.formGroup}>
                                            <Form.Label className={style.formLabel}>Резюме<span>*</span></Form.Label>
                                            <input onChange={handleImg} type="file" id="formFile" className={"form-control" + ' ' + style.files}/>
                                        </div> 
                                    </Form.Group>
                                </div>
                            </div>
                            <Button variant='danger' className='mx-2'><Link to='/tutorQual'>Отмена</Link></Button>
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