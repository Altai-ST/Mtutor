import React,{useState} from 'react'
import style from './tutorSchedule.module.scss'
import { Form, Button, Card } from 'react-bootstrap'
export default function TabContent({tabValue, tabTitle, tabEvents, setTabEvents}) {
    const [timeDay, setTimeDay] = useState({
        start: '',
        end: '',
        id: 1,
    })

    const [activeBtn, setActiveBtn] = useState(true)

    const handleTimeDay = (val)=>{
        if(val.target.name === 'start'){
            setTimeDay({...timeDay, start: val.target.value, id: new Date().toISOString() })
        }else if(val.target.name === 'end'){
            setTimeDay({...timeDay, end: val.target.value, id: new Date().toISOString() })
        }
    }

    const copyEvents = tabEvents.slice()

    const handleAddSchedule = () =>{
        copyEvents.forEach(item => {
            if(item.day === tabValue){
                console.log(item.times)
                item.times.push(timeDay)
            }
        }) 
        setTabEvents(copyEvents)
    }

    const eventDelete = (id)=>{
        console.log(id)
        const foundDay = copyEvents.find(item => item.day === tabValue)
        if(foundDay){
            foundDay.times = foundDay.times.filter(item => item.id !== id)
        }
        copyEvents[+tabValue - 1] = foundDay
        setTabEvents(copyEvents)
    }

    return (
        <div>
            <div className={style.tabBlock + ' ' + 'mt-3'} >
                        <div className={style.timeText}>C:</div>
                        <div className={style.formTime}>
                            <Form.Control
                                name='start' 
                                value={timeDay.start} 
                                type='time' 
                                onChange={handleTimeDay}
                                
                            />
                         </div>
                        <div className={style.timeText}>До:</div>
                        <div className={style.formTime}>
                            <Form.Control 
                                name='end' 
                                value={timeDay.end} 
                                type='time' 
                                onChange={handleTimeDay}
                            />
                        </div>
                        <Button className={style.btnTab} onClick={handleAddSchedule}>Добавить</Button>
                        </div>
                        <div className={style.cardGroup}>
                        <Card className={style.cardItem + ' ' + 'mt-3'}>
                            <Card.Header>{tabTitle}</Card.Header>
                                <Card.Body>
                                {tabEvents[tabValue-1].times.map((el)=>{
                                    return(
                                        <div id={el.id}>
                                            <div className={style.timeText}>
                                                <span>C: {el.start} До: {el.end}</span>
                                                <Button onClick={()=>eventDelete(el.id)}>Delete</Button>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Card.Body>
                            </Card>
                        </div>
        </div>
    )
}
