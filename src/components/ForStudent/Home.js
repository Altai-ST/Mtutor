import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import style from './home.module.scss'

function Home() {
    return (
        <div className={style.main}>
            <div className={style.title_main}>
                <h1>
                    Приветствуем вас на странице
                    <br />
                    <Link to="/student" className={style.Mtutor}>Mtutor</Link>
                </h1>
            </div>
            <div className={style.cards}>
                <Card border="light" className={style.card}>
                    <Card.Header style={{background: '#16a374', color: 'white'}} className={style.cards_Header}>Ищете частного репетитора?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Наш сервис соединяет студентов с квалифицированными частными репетиторами.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="light" className={style.card}>
                    <Card.Header style={{background: '#16a374', color: 'white'}} className={style.cards_Header}>Новости</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Наш сервис соединяет студентов с квалифицированными частными репетиторами.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="light" className={style.card} >
                    <Card.Header style={{background: '#16a374', color: 'white'}} className={style.cardsHeader}>Новости</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Наш сервис соединяет студентов с квалифицированными частными репетиторами.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Home;
