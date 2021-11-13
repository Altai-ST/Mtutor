import React from "react";
import style from "./viewInfo.module.scss";

const ViewInfo = () => {
  return (
      <div className={style.container}>
    <div className={style.container_fuild}>
      <div className={style.profile}>
        <img className={style.img} src='https://www.yoyocustomize.com/img/product/1631000194_profile3.png'/>
        <div>
          <h5 className={style.infoTutor}>Александр Владимирович</h5>
          <p className={style.infoTutor}>21.09.1985г</p>
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
    </div>
  );
};

export default ViewInfo;
