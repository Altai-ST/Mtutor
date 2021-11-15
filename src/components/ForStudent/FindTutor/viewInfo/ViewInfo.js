import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTutorDetailInfoRequest } from "../../../../container/httpRequest";
import style from "./viewInfo.module.scss";

const ViewInfo = () => {
  const params = useParams()

  // const [id, setId] = useState(null)
  const [user, setUser] = useState([])

  // params.userId

  // console.log(params.userId)
   const getTutorDetailInfo = async () => {
    const tutorDetailInfo = await getTutorDetailInfoRequest(params.userId)
    setUser(tutorDetailInfo.user)
    // console.log(tutorDetailInfo.user)
  }
  console.log(user)
  useEffect(()=> {
    getTutorDetailInfo()
    // console.log(tut.user)
    // console.log(getTutorDetailInfoRequest(params.userId))
  },[])

  // console.log(user)

  return (
      <div className={style.container}>
        {/* Hello */}
        {/* {user.map((userInfo) => {
          return ( */}
    <div className={style.container_fuild}>
      <div className={style.profile}>
        <img className={style.img} src={'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/'+user.avatar} />
        <div>
          <h5 className={style.infoTutor}>{user.fullName}</h5>
          <p className={style.infoTutor}></p>
          Художник и искусствовед Игорь Грабарь писал, что картины «Не ждали» и «Иван Грозный и сын его Иван» 
          (1883—1885) стали «высшими точками в творчестве Репина как по силе выражения, так и по живописной мощи». 
          Искусствовед Дмитрий Сарабьянов отмечал, что картина «Не ждали», показывающая «самый многогранный, обаятельный 
          образ одного из героев своего времени», является «одной из вершин русской живописи XIX века».
        </div>
      </div>
      <div className={style.education}>
          Образование*
          <div> 
              <div>

              </div>
          </div>
      </div>
    </div>
      {/* )
    })} */}
    </div>
  );
};

export default ViewInfo;
