import React, { useState } from "react";
import style from "./findTutor.module.scss";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import Cards from "./card/Card";
import { getSearchingSubjectRequest } from "../../../container/httpRequest";
import select from 'react-select'
// import FaTimes from "react-icons/fa"

const FindTutor = () => {
  const [inputValue, setInputValue] = useState('')
  const [courseData, setCourseData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  const getFindTutor = async () => {
    const data = await getSearchingSubjectRequest(inputValue);
    console.log(data);
  };

  const handleSelect =(val)=>{
    getFindTutor(val)
  }

  const clearInput = () => {
    setInputValue('')
  }

  return (
    <div className={style.content}>
      <div className={style.search}>
        <InputGroup className="mb-3" style={{ width: "40%" }}>
          <FormControl
            type='serch'
            placeholder="Поиск"
            aria-describedby="basic-addon1"
            onChange={getFindTutor}
          />
        </InputGroup>
        {/* <Select placeholder='Поиск' onChange={handleSelect} className={style.select}/> */}
        <Button variant="success" className={style.btnSearch}>
          Найти
        </Button>{" "}
      </div>
      <div>
        <div>
          <select>
            {}
          </select>
        </div>
      </div>
      {/* <h2>Пожалуйста выберите нужный вам курс или предмет</h2> */}
      <Cards />
    </div>
  );
};

export default FindTutor;
