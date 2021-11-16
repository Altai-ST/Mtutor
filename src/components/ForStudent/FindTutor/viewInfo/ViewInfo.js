import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getSheduleByIdRequest, getTutorDetailInfoRequest } from "../../../../container/httpRequest";
import style from "./viewInfo.module.scss";
import userAvatar from "../../../../assects/image/user-avatar.png";
import { Table } from "react-bootstrap";

const ViewInfo = () => {
  const params = useParams();
  const [user, setUser] = useState([]);
  const [schedule, setSchedule] = useState([])

  const getTutorDetailInfo = async () => {
    const tutorDetailInfo = await getTutorDetailInfoRequest(params.userId);
    const scheduleId = await getSheduleByIdRequest(tutorDetailInfo.user.scheduleId)
    setUser(tutorDetailInfo.user);
    setSchedule(scheduleId.doc.events)
    console.log(scheduleId.doc.events[0].day)
  };
  useEffect(() => {
    getTutorDetailInfo();
  }, []);
  console.log(user.status);
  return (
    <div className={style.content}>
      <div className={style.wrapper}>
        <div className={style.left}>
          {user.avatar !== null ? (
            <img
              src={
                "http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/" +
                user.avatar
              }
              alt="user"
            />
          ) : (
            <img src={userAvatar} alt="user" width="100" />
          )}
          <h4>{user.fullName}</h4>
          <p>{user.birthDate}</p>
          <div>{user.shortDescription}</div>
          <div>Email: {user.email}</div>
          <div>Телефон номер: {user.phone}</div>
        </div>
        <div className={style.right}>
          <div className={style.info}>
            <h5>
              Образование<span id={style.asterisk}>*</span>
            </h5>
            <div className={style.info_data}>
              <div className={style.data}>
                <h6>
                  Учреждение<span id={style.asterisk}>*</span>
                </h6>
                <span>{user.educationName}</span>
                <h6>
                  Факультет(Специальность)<span id={style.asterisk}>*</span>
                </h6>
                <span>{user.educationFaculty} </span>
                <h6>
                  Cтепень образования<span id={style.asterisk}>*</span>
                </h6>
                <span>{user.educationDegree}</span>
              </div>
            </div>
          </div>
          <div className={style.course}>
            <h5>
              Курс<span id={style.asterisk}>*</span>
            </h5>
            <div className={style.course_data}>
              <div className={style.data}>
                <h6>
                  Названия курса<span id={style.asterisk}>*</span>
                </h6>
                <span>{user.course}</span>
              </div>
              <div className={style.data}>
                <h6>
                  Цена<span id={style.asterisk}>*</span>
                </h6>
                <span>{user.price}сом/час</span>
              </div>
            </div>
          </div>
           {/* <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Day</th>
                <th>Start</th>
                <th>End</th>
              </tr>
            </thead>
          {schedule.map((scheduleCourse) => {
            return (
            <tbody>
              <tr>
                <td>{scheduleCourse.day}</td>
                <td>{scheduleCourse.start}</td>
                <td>{scheduleCourse.end}</td>
              </tr>
            </tbody>
          )})} 
          </Table> */}
        </div>
      </div>
    </div>
  );
};

export default ViewInfo;
