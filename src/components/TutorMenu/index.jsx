import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import style from "./tutorMenu.module.scss";
import { FaUser, FaBook, FaCalendar, FaTimes, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveTutorCourses } from "../../store/actions";
import { Button, Form } from "react-bootstrap";
import { getId, setStatus } from "../../container/httpRequest";
import LoginModal from "../LoginModal";
const TutorQualification = () => {
  const user = useSelector(state => state.userRedusers.user)
  const [btnActive, setBtnActive] = useState(true)
  const [show, setShow] = useState(false);
  useEffect(() => {
    if(user.isCourseOfferCompleted && user.isProfileCompleted && user.isScheduleCompleted){
      setBtnActive(false)
    }
  }, [])
  const handleSubmit =()=>{
    setStatus({status:'pending'})
    setShow(false)
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
            <Link to='/tutorSchedule'>Add your availibility</Link>
            <div>
              <FaCalendar className={style.icons} />
              {user.isScheduleCompleted ? <FaCheck className={style.icons}/> 
              : <FaTimes className={style.cancelIcon} />}
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#b0d3c6', display: 'flex', justifyContent: 'space-between'}}>
            <Link to='/tutorAddCourse'>Add your course</Link>
            <div>
              <FaBook className={style.icons} />
              {user.isCourseOfferCompleted ? <FaCheck className={style.icons}/> :
                <FaTimes className={style.cancelIcon} />
              }
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Button disabled={btnActive} onClick={handleShow}>Отправить</Button>
      <LoginModal show={show} handleClose={handleClose} title='Отправка заявки'>
        <div>
          <h3>Вы действительно хотите отправить заявку?</h3>
        </div>
        <div className={style.btnGroupe}>
          <Button className='mx-3' onClick={handleSubmit}>Да</Button>
          <Button variant='danger' onClick={handleClose}>Нет</Button>
        </div>
       
      </LoginModal>
    </div>
  );
};
export default TutorQualification;
