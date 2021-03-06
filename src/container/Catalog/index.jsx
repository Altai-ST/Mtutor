import React, { useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import styles from './style.module.css'
import { Redirect, useHistory, useRouteMatch} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SetRole } from "../../store/actions";
import { saveToken } from "../../store/actions";

const Catalog =()=>{
    const dispatch = useDispatch()
    const history = useHistory()
    const stats = useSelector(state=>state.Autorization.formEmail)

    const setRole=(val)=>{
        dispatch(SetRole(val))
    }
    const states = useSelector(state=>state.userRedusers.token)
    if (states === null){
        dispatch(saveToken(JSON.parse(localStorage.getItem('tokens'))))
    }
    if (stats.role === 10 || stats.role === 5){
        return <Redirect to='/register'/>
    }
    
    return(
        <div className={styles.catalog}>
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
                                    <button onClick={()=>setRole(10)} className={styles.btnPerson +' '+ 'py-2'}>
                                    Студент
                                    </button>
                            </Row>
                        <Row className='px-2'>
                            <button onClick={()=>setRole(5)} className={styles.btnPerson +' '+ 'py-2'}>Репетитор</button>
                        </Row>
                    </Col>
                </Col>
                
            </Container>
        </div>
    )
}

export default Catalog