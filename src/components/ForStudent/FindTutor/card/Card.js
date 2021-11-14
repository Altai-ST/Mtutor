import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import style from "./card.module.scss";
import { Link } from "react-router-dom";
import { getTutorDetailInfoRequest } from "../../../../container/httpRequest";

const CardData = [
  {
    id: 0,
    avatar: "https://www.yoyocustomize.com/img/product/1631000194_profile3.png",
    name: "Александр",
    title: "Я Репетитор",
    price: "500сом/час",
  },
  {
    id: 1,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-zsO-WB5sqXt2_4XGhgNqeecBwQ2dm2dTFcV4NBR0hBIK9nlKRuIz8HUwEo-eEteJBm4&usqp=CAU",
    name: "Александр",
    title: "Я Репетитор",
    price: "500сом/час",
  },
  {
    id: 2,
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    name: "Александр",
    title: "Я Репетитор",
    price: "500сом/час",
  },
  {
    id: 3,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBKl8PFoYK2s9_5FEy5iUtdtMWmK-HwWpysc1P5jDWSCU3eTE646mVo1gfXSk8_yg_GBM&usqp=CAU",
    name: "Александр",
    title: "Я Репетитор",
    price: "500сом/час",
  },
];

const Cards = () => {
  const [id, setId] = useState(null)
  
  const getTutorDetailInfo = async() => {
    const TutorDeatailInfo = await getTutorDetailInfoRequest(id)
    console.log(id)
    // console.log(TutorDeatailInfo)
  }

  return (
    <div className={style.tutor_card}>
      {CardData.map((cardItem) => {
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

export default Cards;
