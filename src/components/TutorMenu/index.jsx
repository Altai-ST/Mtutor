import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import style from "./tutorMenu.module.scss";
import { FaUser, FaBook, FaCalendar, FaTimes, FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLocalStorage, setLocalStorage } from "../../util/constants/localStorage";
import { useDispatch } from "react-redux";
import { saveTutorCourses } from "../../store/actions";
const TutorQualification = () => {
  const saveCourse = useSelector(state => state.userRedusers.saveCourse)
  const dispatch = useDispatch()
  if(saveCourse && !getLocalStorage('saveCorses')){
    setLocalStorage('saveCourses', JSON.stringify(saveCourse))
  }else if(getLocalStorage('saveCourses') && !saveCourse){
    dispatch(saveTutorCourses(JSON.parse(getLocalStorage('saveCourses'))))
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
              <FaTimes className={style.cancelIcon} />
            </div>
          </ListGroup.Item>
          <ListGroup.Item style={{backgroundColor: '#b0d3c6', display: 'flex', justifyContent: 'space-between'}}>
            Add your availibility
            <div>
              <FaCalendar className={style.icons} />
              <FaTimes className={style.cancelIcon} />
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
    </div>
  );
};
export default TutorQualification;