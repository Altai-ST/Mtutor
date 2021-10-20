import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styles from './style.module.css'
import { Link } from "react-router-dom";

const Catalog =()=>{
    return(
        <div>
            <Container className='mt-5'>
                <Col className={styles.mainColumn}>
                    <Col className={styles.firstRow}>
                        <Row>
                            <h4 className='mt-4 pt-1'> Добро пожаловать в Mtutor!!!</h4>
                        </Row>
                        <Row>
                            <h6>Расскажи нам о себе</h6>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h1>Я</h1>
                        </Row>
                            <Row className='mb-2 px-2'>
                                <Link to='/register'>
                                    <button className={styles.btnPerson +' '+ 'py-2'}>
                                    Студент
                                    </button>
                                 </Link>
                            </Row>
                        <Row className='px-2'>
                            <Link to='/register'>
                                <button className={styles.btnPerson +' '+ 'py-2'}>Репетитор</button>
                            </Link>
                        </Row>
                    </Col>
                </Col>
                
            </Container>
        </div>
    )
}

export default Catalog