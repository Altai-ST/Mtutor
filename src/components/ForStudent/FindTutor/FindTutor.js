import React, { useState } from "react";
import style from "./findTutor.module.scss";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import Cards from "./card/Card";
import {
  getSearchingSubjectRequest,
  getTutorsBySubjectRequest,
} from "../../../container/httpRequest";
import select from "react-select";
import CustomSelect from "./CustomSelect";

const FindTutor = () => {
  const [inputValue, setInputValue] = useState("");
  const [subjectId, setSubjectId] = useState(0);
  const [courses, setCourses] = useState([]);

  // const getSearchingSubject = async () => {
  //   const data = await getSearchingSubjectRequest(inputValue);
  //   setCourses(data);
  //   console.log(inputValue);
  //   console.log(data);
  // };

  const getTutorsBySubject = async () => {
    const subject = await getTutorsBySubjectRequest(subjectId);
    console.log(subject);
    // console.log(JSON.stringify(subject))
  };

  return (
    <div className={style.content}>
      <div className={style.search}>
        {/* <InputGroup className="mb-3" style={{ width: "40%" }}>
          <FormControl
            type="serch"
            placeholder="Поиск"
            aria-describedby="basic-addon1"
            onChange={getSearchingSubject}
          />
        </InputGroup> */}
        <CustomSelect/>
        <Button
          variant="success"
          className={style.btnSearch}
          onClick={getTutorsBySubject}
        >
          Найти
        </Button>{" "}
      </div>
      {/* // <select>
      //   {courses
      //     ? courses.map((elem) => {
      //         return <option>{elem.name}</option>;
      //       })
      //     : null}
      // </select> */}
      {/* <div className={style.select}>
        {courses.length === 0 ? (
          null
        ):(
          <div className={style.select}>
           Sorry, we couldn't find what you're looking for.
          </div>
        ) }
      </div> */}
      {/* <h2>Пожалуйста выберите нужный вам курс или предмет</h2> */}
      {/* <Cards /> */}
    </div>
  );
};

export default FindTutor;
