import React, { useState } from "react";
import style from "./findTutor.module.scss";
import { Button } from "react-bootstrap";
import Cards from "./card/Card";
import {
  getSearchingSubjectRequest,
  getTutorsBySubjectRequest,
} from "../../../container/httpRequest";
import Select from "react-select";

const FindTutor = () => {
  const [inputValue, setInputValue] = useState("");
  const [subjectId, setSubjectId] = useState(null);
  const [courses, setCourses] = useState([]);

  const handleInpuChange = async (value) => {
    setInputValue(value);
    const data = await getSearchingSubjectRequest(value);
    setCourses(data.docs);
  };

  const getTutorsBySubject = async () => {
    const subject = await getTutorsBySubjectRequest(subjectId);
    console.log(subjectId)
  };

  const handleSelectChange = (e) => {
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
      {/* {courses === 0 ? (
        <h2>Пожалуйста выберите нужный вам курс или предмет</h2>
      ) : (
        <Cards />
      )} */}
      {courses.map((cardItem) => {
        return (
          <Card className={style.card}>
            <Card.Img variant="top" src={cardItem.avatar} />
            <Card.Body>
              <Card.Title>{cardItem.name}</Card.Title>
              <Card.Text>{cardItem.title}</Card.Text>
              <div>цена:{cardItem.price}</div>
              <Link to="/student/findTutor/id">
                <Button
                  variant="outline-success"
                  className={style.view_info_btn}
                  onclick={getTutorDetailInfo}
                >
                  View information
                </Button>{" "}
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default FindTutor;
