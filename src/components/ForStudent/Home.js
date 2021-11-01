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
                    <Link to="/home" className={style.Mtutor}>Mtutor</Link>

                </h1>
            </div>
            <div className={style.cards}>
                <Card border="light" style={{ width: '27rem' }}>
                    <Card.Header className={style.cards_header}>Ищете частного репетитора?</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Наш сервис соединяет студентов с квалифицированными частными репетиторами.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="light" style={{ width: '27rem' }}>
                    <Card.Header className={style.cards_header}>Новости</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Наш сервис соединяет студентов с квалифицированными частными репетиторами.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card border="light" style={{ width: '27rem' }}>
                    <Card.Header className={style.cards_header}>Новости</Card.Header>
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
