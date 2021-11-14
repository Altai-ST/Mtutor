import React, { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";
import style from "./tutorMenu.module.scss";
import { FaUser, FaBook, FaCalendar, FaTimes, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { saveTutorCourses } from "../../store/actions";
import { Button } from "react-bootstrap";
import { setStatus } from "../../container/httpRequest";
const TutorQualification = () => {
  const saveCourse = useSelector(state => state.userRedusers.saveCourse)
  const user = useSelector(state => state.userRedusers.user)
  const [btnActive, setBtnActive] = useState(true)
  const dispatch = useDispatch()
  if(user.isCourseOfferCompleted){
    dispatch(saveTutorCourses(true))
  }else{
    dispatch(saveTutorCourses(false))
  }
  useEffect(() => {
    if(user.isCourseOfferCompleted && user.isProfileCompleted && user.isScheduleCompleted){
      setBtnActive(false)
    }
  }, [])
  const handleSubmit =()=>{
    setStatus({status:'pending'})
  }
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
              {saveCourse ? <FaCheck className={style.icons}/> :
                <FaTimes className={style.cancelIcon} />
              }
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      <Button disabled={btnActive} onClick={handleSubmit}>Отправить</Button>
    </div>
  );
};
export default TutorQualification;