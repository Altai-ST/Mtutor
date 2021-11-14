import style from '../Edit/Edit.module.scss'
import { Card, Form, Button, Col, Image } from 'react-bootstrap'


const Edit = () => {
	return (
		<div className={style.app_body}>
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
														placeholder=' Введите ФИО'
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
														placeholder=' Введите дата рождения'
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
														placeholder='Расскажите нам о себе'
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
													<Col xs={6} md={4}>
														<Image
															src='holder.js/171x180'
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
														placeholder='Введите наименование учреждения'
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
														placeholder='Введите специальность'
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
														placeholder='Введите степень образования'
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
													<Form.Control
														disabled
														as='textarea'
														name='about'
														placeholder=' Введите резюме'
													/>
												</div>
											</div>
										</Form.Group>
									</div>
								</div>
								<Button variant='info'>Назад</Button>
								<Button variant='primary' type='submit'>
									Одобрить
								</Button>
								<Button variant='danger' className='mx-2'>
									Отклонить
								</Button>
							</Form>
						</div>
					</Card.Body>
				</Card>
				<div></div>
			</div>
		</div>
	)
}
export default Edit
