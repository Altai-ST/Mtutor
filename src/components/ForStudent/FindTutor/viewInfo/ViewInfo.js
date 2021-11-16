import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTutorDetailInfoRequest } from "../../../../container/httpRequest";
import style from "./viewInfo.module.scss";
import userAvatar from "../../../../assects/image/user-avatar.png";

const ViewInfo = () => {
  const params = useParams();
  const [user, setUser] = useState([]);

  const getTutorDetailInfo = async () => {
    const tutorDetailInfo = await getTutorDetailInfoRequest(params.userId);
    setUser(tutorDetailInfo.user);
  };
  console.log(user);
  useEffect(() => {
    getTutorDetailInfo();
  }, []);
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
      </div>
      <div className={style.right}>
        <div className={style.info}>
          <h3>
            Образование<span id={style.asterisk}>*</span>
          </h3>
          <div className={style.info_data}>
            <div className={style.data}>
              <h4>
                Учреждение<span id={style.asterisk}>*</span>
              </h4>
              <span>{user.educationName}</span>
              <h4>
                Факультет(Специальность)<span id={style.asterisk}>*</span>
              </h4>
              <span>{user.educationFaculty} </span>
              <h4>
                Cтепень образования<span id={style.asterisk}>*</span>
              </h4>
              <span>{user.educationDegree}</span>
            </div>
          </div>
        </div>

        <div className={style.projects}>
          <h3>
            Курс<span id={style.asterisk}>*</span>
          </h3>
          <div className={style.projects_data}>
            <div className={style.data}>
              <h4>
                Названия курса<span id={style.asterisk}>*</span>
              </h4>
              <p></p>
            </div>
            <div className={style.data}>
              <h4>
                Цена<span id={style.asterisk}>*</span>
              </h4>
              <span>{user.price}сом/час</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ViewInfo;
