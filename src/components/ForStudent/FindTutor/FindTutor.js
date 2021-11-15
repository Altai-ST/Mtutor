import React, { useState } from "react";
import style from "./findTutor.module.scss";
import { Button, Card } from "react-bootstrap";
import {
  getSearchingSubjectRequest,
  getTutorsBySubjectRequest,
  getTutorDetailInfoRequest
} from "../../../container/httpRequest";
import Select from "react-select";
import { Link } from "react-router-dom";
import DefaultUser from '../../../assects/image/user-avatar.png'

const FindTutor = () => {
  const [inputValue, setInputValue] = useState("");
  const [subjectId, setSubjectId] = useState(null);
  const [courses, setCourses] = useState([]);
  const [card, setCards] = useState([])

  const handleInpuChange = async (value) => {
    setInputValue(value);
    const data = await getSearchingSubjectRequest(value);
    setCourses(data.docs);
  };

  const cards = (props) => {
    let date = card
  }

  const getTutorsBySubject = async () => {
    const subject = await getTutorsBySubjectRequest(subjectId);
    setCards(subject.docs)
    // console.log(subject.docs)
  };
  
  // const getTutorDetailInfo = async (id) => {
  //   console.log(id)
  //   const tutorDetailInfo = await getTutorDetailInfoRequest(123)
  // }

  const handleSelectChange = (e) => {
    console.log(e)
    setSubjectId(e.value);
  };

  const option = courses.map((el) => ({
    value: el.id,
    label: el.name,
  }));

  return (
    <div className={style.content}>
      <div className={style.search}>
        <Select
          placeholder="Поиск"
          onChange={handleSelectChange}
          onInputChange={handleInpuChange}
          options={option}
          className={style.select}
          inputValue={inputValue}
        />
        <Button
          variant="success"
          className={style.btnSearch}
          onClick={getTutorsBySubject}
        >
          Найти
        </Button>{" "}
      </div>
        {/* {<h2>Пожалуйста выберите нужный вам курс или предмет</h2>} */}
      <div className={style.container}>
      {card.map((cardItem) => {
        return (
          <div className={style.tutor_card}>
          <Card className={style.card}>
            {cardItem.avatar !== null ? (
              <Card.Img variant="top" src={'http://ec2-18-184-251-15.eu-central-1.compute.amazonaws.com:8000/'+cardItem.avatar} />
            ) : (
              <Card.Img variant="top" src={DefaultUser} />
            )

            }
            <Card.Body>
              <Card.Title>{cardItem.fullName}</Card.Title>
              <Card.Text>{cardItem.shortDescription}</Card.Text>
              <div>цена: {cardItem.price}сом/час</div>
              <Link to={'/student/findTutor/' + cardItem.id}>
                <Button
                  variant="outline-success"
                  className={style.view_info_btn}
                  // onClick={()=> getTutorDetailInfo(cardItem.id) }
                >
                  View information
                </Button>{" "}
              </Link>
            </Card.Body>
          </Card>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default FindTutor;
