import style from '../Edit/Edit.module.scss'
import { Card, Form, Button, Col, Image } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { getUser, putUpdateUser } from '../../../../container/httpRequest'
import { Link } from 'react-router-dom'


const ViewApplication = () => {
	const [user , setUser] = useState([])
	const [statusTutor ,setStatus] = useState('')

	const history = useHistory()

	const params = useParams()

	const getUsers = async()=>{
		const res = await getUser(params.userId)
		
		setUser(res.user)
	}

	const putUpdateUsers = async(val)=>{
		setStatus(val)
	}

	const statusUpdate =async()=>{
		if(statusTutor !== ''){
			const res = await putUpdateUser(params.userId, statusTutor)
			console.log(res.user);
			history.push('/admin/application-tutor')
		}
	}

	useEffect(()=>{
		statusUpdate()
	},[statusTutor])
	
	useEffect(() => {
		getUsers()
	},[])

	return (
		
			<div className={style.forms}>
				<Card>
					<Card.Body>
						<div>
							<Form>
								<div className={style.mainForm}>
									<div className={style.firstBlock}>
										<h5>Основные данные</h5>
										<Form.Group>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
													ФИО<span>*</span>
												</Form.Label>
												<div className={style.control}>
													<Form.Control
														name='fullName'
														type='fullName'
														placeholder={user.fullName}
														disabled
													/>
												</div>
											</div>
										</Form.Group>
										<Form.Group className='mt-3'>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
													Дата рождения<span>*</span>
												</Form.Label>
												<div className={style.control}>
													<Form.Control
														disabled
														type='fullName'
														placeholder={user.birthDate}
													/>
												</div>
											</div>
										</Form.Group>
										<Form.Group className='mt-3'>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
													Расскажите нам о себе
													<span>*</span>
												</Form.Label>
												<div className={style.control}>
													<Form.Control
														disabled
														as='textarea'
														name='about'
														placeholder={user.shortDescription}
													/>
												</div>
											</div>
										</Form.Group>
										<Form.Group
											controlId='formFile'
											className='mb-3 mt-4'
										>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
													Аватар<span>*</span>
												</Form.Label>
												<div>
													<Col md={6} md={10}>
														<Image
															src={'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/'+user.avatar}
															rounded
														/>
													</Col>
												</div>
											</div>
										</Form.Group>
									</div>
									<div className={style.secondBlock}>
										<h5>Образование</h5>
										<Form.Group className='mt-3'>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
													Учреждение<span>*</span>
												</Form.Label>
												<div className={style.control}>
													<Form.Control
														disabled
														name='eduPlace'
														type='input'
														placeholder={user.educationName}
													/>
												</div>
											</div>
										</Form.Group>
										<Form.Group className='mt-3'>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
													Факультет(Специальность)
												</Form.Label>
												<div className={style.control}>
													<Form.Control
														disabled
														name='special'
														type='input'
														placeholder={user.educationFaculty}
													/>
												</div>
											</div>
										</Form.Group>
										<Form.Group>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
													Степень образования
													<span>*</span>
												</Form.Label>
												<div className={style.control}>
													<Form.Control
														disabled
														name='special'
														type='input'
														placeholder={user.educationDegree}
													/>
												</div>
											</div>
										</Form.Group>
										<Form.Group
											controlId='formFile'
											className='mb-3 mt-4'
										>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
													Резюме<span>*</span>
												</Form.Label>
												<div className={style.control}>
													<a href={'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/'+user.resume}>resume</a>
												</div>
											</div>
										</Form.Group>
										<h5>Выбор курса преподования</h5>
										<Form.Group className='mt-3'>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
												Пожалуйста выберите курс вы собираетесь преподовать*<span>*</span>
												</Form.Label>
												<div className={style.control}>
													<Form.Control
														disabled
														name='eduPlace'
														type='input'
														placeholder={user.subjectId}
													/>
												</div>
											</div>
										</Form.Group>
										<Form.Group className='mt-3'>
											<div className={style.formGroup}>
												<Form.Label
													className={style.formLabel}
												>
												Цена за час(60мин) занятия в Сомах*<span>*</span>
												</Form.Label>
												<div className={style.control}>
													<Form.Control
														disabled
														name='eduPlace'
														type='input'
														placeholder={user.price}
													/>
												</div>
											</div>
										</Form.Group>
									</div>	
								</div>
								<Link to='/admin/application-tutor'><Button variant='info'> Назад </Button></Link>
								<Button className={style.btn} onClick={()=> putUpdateUsers('confirmed')} variant='primary'>
									Одобрить
								</Button>
								<Button variant='danger' className='mx-2'  onClick={()=> putUpdateUsers('rejected')}>
									Отклонить
								</Button>
							</Form>
						</div>
					</Card.Body>
				</Card>
				<div></div>
			</div>
	)
}
export default ViewApplication
