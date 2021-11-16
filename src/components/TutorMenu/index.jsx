import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import style from "./tutorMenu.module.scss";
import { FaUser, FaBook, FaCalendar, FaTimes, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button} from "react-bootstrap";
import { setStatus } from "../../container/httpRequest";
import LoginModal from "../LoginModal";
const TutorQualification = () => {
  const user = useSelector(state => state.userRedusers.user)
  const [btnActive, setBtnActive] = useState(true)
  const [show, setShow] = useState(false);
  const [btnStatus, setBtnStatus] = useState('Отправить на расмотрение')
  useEffect(() => {
    if(user.isCourseOfferCompleted && user.isProfileCompleted && user.isScheduleCompleted && user.status === 'pending'){
      setBtnActive(true)
      setBtnStatus('На расмотрении')
    }else if(user.status === 'rejected'){
      setBtnActive(true)
      setBtnStatus('Отклоненно')
    }
  }, [])
  const handleSubmit =()=>{
    setStatus({status:'pending'})
    setShow(false)
    setBtnActive(true)
    setBtnStatus('На расмотрении')
  }

  const handleClose = () =>{
    setShow(false)
  };

  const handleShow = () => {
    setShow(true)
    
  };

  return (
    <div className={style.tutorMenu}>
      <h1>Здравсвтуйте tutor,</h1>
      <p>You're few steps away from becoming a tutor. We only need you to provide us with the following information</p>
      <Card style={{ width: "70%" }} className={style.card}>
        <ListGroup variant="flush">
          <ListGroup.Item style={{backgroundColor: '#b0d3c6', display: 'flex', justifyContent: 'space-between'}}>
            <Link to='/tutorForm'>Заполните ваш профиль</Link>
            <div>
              <FaUser className={style.icons} />
              {user.isProfileCompleted ? <FaCheck className={style.icons}/> : <FaTimes className={style.cancelIcon} />}
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#b0d3c6', display: 'flex', justifyContent: 'space-between'}}>
            <Link to='/tutorSchedule'>Запоните ваше расписание</Link>
            <div>
              <FaCalendar className={style.icons} />
              {user.isScheduleCompleted ? <FaCheck className={style.icons}/> 
              : <FaTimes className={style.cancelIcon} />}
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#b0d3c6', display: 'flex', justifyContent: 'space-between'}}>
            <Link to='/tutorAddCourse'>Добавьте курс</Link>
            <div>
              <FaBook className={style.icons} />
              {user.isCourseOfferCompleted ? <FaCheck className={style.icons}/> :
                <FaTimes className={style.cancelIcon} />
              }
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Button disabled={btnActive} onClick={handleShow}>{btnStatus}</Button>
      <LoginModal show={show} handleClose={handleClose} title='Отправка заявки'>
        <div className={style.textModule}>
          <h5>Вы прошли предквалификационный этап и успешно отправили заявку. Чтобы получить полноценные права репетитора вам надо будет подождать некоторое время пока наши операторы ознакомятся и проверят вашу заявку как можно скорее.</h5>
        </div>
        <div className={style.btnGroupe}>
          <Button className={style.btn1} onClick={handleSubmit}>Да</Button>
          <Button variant='danger' className={style.btn1} onClick={handleClose}>Нет</Button>
        </div>

      </LoginModal>
    </div>
  );
};
export default TutorQualification;
