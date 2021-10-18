import React from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styles from './style.module.css'


const Catalog =()=>{
    return(
        <div>
            <Container className='mt-5'>
                <Col className={styles.col1}>
                    <Col className={styles.row1}>
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
                            <button className={styles.btnViolet +' '+ 'py-2'}>
                                Студент
                            </button>
                        </Row>
                        <Row className='px-2'>
                            <button className={styles.btnViolet +' '+ 'py-2'}>Репетитор</button>
                        </Row>
                    </Col>
                </Col>
                
            </Container>
        </div>
    )
}

export default Catalog