import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Button, Card } from 'react-bootstrap'
import style from './tutorSchedule.module.scss'
import { Link } from 'react-router-dom'
import { setSchedule } from '../../container/httpRequest'
import { useHistory } from 'react-router'

export default function TutorSchedule() {
    const [key, setKey] = useState('1')
    const [startDay, setStartDay] = useState('')
    const [endDay, setEndDay] = useState('')
    const [showTime, setShowTime] = useState(false)
    const [eventsDay, setEventsDay] = useState('')
    const [eventsDay2, setEventsDay2] = useState('')
    const [eventsDay3, setEventsDay3] = useState('')
    const [eventsDay4, setEventsDay4] = useState('')
    const [eventsDay5, setEventsDay5] = useState('')
    const [eventsDay6, setEventsDay6] = useState('')
    const [eventsDay7, setEventsDay7] = useState('')
    const [btnActive, setBtnActive] = useState(true)
    const [allDays, setAllDays] = useState({events:['']})

    useEffect(() => {
        switch (key){
            case '1':
                if(eventsDay !== ''){
                    setStartDay(eventsDay.start)
                    setEndDay(eventsDay.end)
                    setShowTime(true)
                }else{
                    setStartDay('')
                    setEndDay('')
                    setShowTime(false)
                }
                break
            case '2':
                if(eventsDay2 !== ''){
                    setStartDay(eventsDay2.start)
                    setEndDay(eventsDay2.end)
                    setShowTime(true)
                }else{
                    setStartDay('')
                    setEndDay('')
                    setShowTime(false)
                }
                break
            case '3':
                if(eventsDay3 !== ''){
                    setStartDay(eventsDay3.start)
                    setEndDay(eventsDay3.end)
                    setShowTime(true)
                }else{
                    setStartDay('')
                    setEndDay('')
                    setShowTime(false)
                }
                break
            case '4':
                if(eventsDay4 !== ''){
                    setStartDay(eventsDay4.start)
                    setEndDay(eventsDay4.end)
                    setShowTime(true)
                }else{
                    setStartDay('')
                    setEndDay('')
                    setShowTime(false)
                }
                break
            case '5':
                if(eventsDay5 !== ''){
                    setStartDay(eventsDay5.start)
                    setEndDay(eventsDay5.end)
                    setShowTime(true)
                }else{
                    setStartDay('')
                    setEndDay('')
                    setShowTime(false)
                }
                break
            case '6':
                if(eventsDay6 !== ''){
                    setStartDay(eventsDay6.start)
                    setEndDay(eventsDay6.end)
                    setShowTime(true)
                }else{
                    setStartDay('')
                    setEndDay('')
                    setShowTime(false)
                }
                break
            case '7':
                if(eventsDay7 !== ''){
                    setStartDay(eventsDay7.start)
                    setEndDay(eventsDay7.end)
                    setShowTime(true)
                }else{
                    setStartDay('')
                    setEndDay('')
                    setShowTime(false)
                }
                break
        }
    }, [key])

    const handleAddDay = (val)=>{
        if(val.target.name === 'start'){
             setStartDay(val.target.value)
        }else if(val.target.name === 'end'){
            setEndDay(val.target.value)
        }
    }
    

    const handleAddSchedule = () =>{
        switch(key){
            case '1':
                setEventsDay({ day: Number(key), start: startDay, end: endDay })
                break
            case '2':
                setEventsDay2({ day: Number(key), start: startDay, end: endDay })
                break
            case '3':
                setEventsDay3({ day: Number(key), start: startDay, end: endDay })
                break
            case '4':
                setEventsDay4({ day: Number(key), start: startDay, end: endDay })
                break
            case '5':
                setEventsDay5({ day: Number(key), start: startDay, end: endDay })
                break
            case '6':
                setEventsDay6({ day: Number(key), start: startDay, end: endDay })
                break
            case '7':
                setEventsDay7({ day: Number(key), start: startDay, end: endDay })
                break
        }
        if(eventsDay !== '' && eventsDay2 !== '' && eventsDay3 !== '' && eventsDay4 !== '' 
            && eventsDay5 !== '' && eventsDay6 !== '' && eventsDay7 !== ''){
                setBtnActive(false)
                setAllDays({...allDays, events:[eventsDay,eventsDay2,eventsDay3,eventsDay4,eventsDay5,eventsDay6,eventsDay7]})
        }
        setShowTime(true)
    }
    const history = useHistory()

    const handleSubmit=async()=>{
        if(allDays.events[0] !== ''){
            console.log(allDays)
            const res = await setSchedule(allDays)
            console.log(res)
            history.push('/tutorQual')
        }
    }
    return (
        <div>
            <div className={style.btnBlock+' '+'my-3 mx-3'}>
                <Button disabled={btnActive} onClick={handleSubmit}>Отправить</Button>
                <Link to='/tutorQual'><Button variant='danger'>Отмена</Button></Link>
            </div>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className={style.mainBlock}
            >
                <Tab eventKey='1' title="Понедельник">
                    <div className={style.tabBlock + ' ' + 'mt-3'} >
                        С: 
                        <input value={startDay} className='mx-2' type="text" name='start' onChange={handleAddDay}/>
                        До: 
                        <input value={endDay} className='mx-2' type="text" name='end' onChange={handleAddDay}/>
                        <Button className={style.btnTab} onClick={handleAddSchedule}>Добавить</Button>
                        <div className={style.cardGroup}>
                            <Card className={style.cardItem + ' ' + 'mt-3'}>  
                                <Card.Header>Понедельник</Card.Header>
                                <Card.Body>
                                    {showTime && <div className={style.timeText}>
                                        <p>C: {startDay}</p>
                                        <p>До: {endDay}</p>
                                    </div>}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Tab>
                <Tab className={style.tabBlock} eventKey="2" title="Вторник">
                <div className={style.tabBlock + ' ' + 'mt-3'}>
                        С: 
                        <input value={startDay} className='mx-2' type="text" name='start' onChange={handleAddDay}/>
                        До: 
                        <input value={endDay} className='mx-2' type="text" name='end' onChange={handleAddDay}/>
                        <Button className={style.btnTab} onClick={handleAddSchedule}>Добавить</Button>
                        <div className={style.cardGroup}>
                            <Card className={style.cardItem + ' ' + 'mt-3'}>  
                                <Card.Header>Вторник</Card.Header>
                                <Card.Body>
                                    {showTime && <div className={style.timeText}>
                                        <p>C: {startDay}</p>
                                        <p>До: {endDay}</p>
                                    </div>}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Tab>
                <Tab className={style.tabBlock} eventKey="3" title="Среда">
                <div className={style.tabBlock + ' ' + 'mt-3'} >
                        С: 
                        <input value={startDay} className='mx-2' type="text" name='start' onChange={handleAddDay}/>
                        До: 
                        <input value={endDay} className='mx-2' type="text" name='end' onChange={handleAddDay}/>
                        <Button className={style.btnTab} onClick={handleAddSchedule}>Добавить</Button>
                        <div className={style.cardGroup}>
                            <Card className={style.cardItem + ' ' + 'mt-3'}>  
                                <Card.Header>Среда</Card.Header>
                                <Card.Body>
                                    {showTime && <div className={style.timeText}>
                                        <p>C: {startDay}</p>
                                        <p>До: {endDay}</p>
                                    </div>}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Tab>
                <Tab className={style.tabBlock} eventKey="4" title="Четверг">
                <div className={style.tabBlock + ' ' + 'mt-3'} >
                        С: 
                        <input value={startDay} className='mx-2' type="text" name='start' onChange={handleAddDay}/>
                        До: 
                        <input value={endDay} className='mx-2' type="text" name='end' onChange={handleAddDay}/>
                        <Button className={style.btnTab} onClick={handleAddSchedule}>Добавить</Button>
                        <div className={style.cardGroup}>
                            <Card className={style.cardItem + ' ' + 'mt-3'}>  
                                <Card.Header>Четверг</Card.Header>
                                <Card.Body>
                                    {showTime && <div className={style.timeText}>
                                        <p>C: {startDay}</p>
                                        <p>До: {endDay}</p>
                                    </div>}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Tab>
                <Tab className={style.tabBlock} eventKey="5" title="Пятница">
                <div className={style.tabBlock + ' ' + 'mt-3'} >
                        С: 
                        <input value={startDay} className='mx-2' type="text" name='start' onChange={handleAddDay}/>
                        До: 
                        <input value={endDay} className='mx-2' type="text" name='end' onChange={handleAddDay}/>
                        <Button className={style.btnTab} onClick={handleAddSchedule}>Добавить</Button>
                        <div className={style.cardGroup}>
                            <Card className={style.cardItem + ' ' + 'mt-3'}>  
                                <Card.Header>Пятница</Card.Header>
                                <Card.Body>
                                    {showTime && <div className={style.timeText}>
                                        <p>C: {startDay}</p>
                                        <p>До: {endDay}</p>
                                    </div>}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Tab>
                <Tab className={style.tabBlock} eventKey="6" title="Суббота">
                <div className={style.tabBlock + ' ' + 'mt-3'} >
                        С: 
                        <input value={startDay} className='mx-2' type="text" name='start' onChange={handleAddDay}/>
                        До: 
                        <input value={endDay} className='mx-2' type="text" name='end' onChange={handleAddDay}/>
                        <Button className={style.btnTab} onClick={handleAddSchedule}>Добавить</Button>
                        <div className={style.cardGroup}>
                            <Card className={style.cardItem + ' ' + 'mt-3'}>  
                                <Card.Header>Суббота</Card.Header>
                                <Card.Body>
                                    {showTime && <div className={style.timeText}>
                                        <p>C: {startDay}</p>
                                        <p>До: {endDay}</p>
                                    </div>}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Tab>
                <Tab className={style.tabBlock} eventKey="7" title="Восскресенье">
                <div className={style.tabBlock + ' ' + 'mt-3'} >
                        С: 
                        <input value={startDay} className='mx-2' type="text" name='start' onChange={handleAddDay}/>
                        До: 
                        <input value={endDay} className='mx-2' type="text" name='end' onChange={handleAddDay}/>
                        <Button className={style.btnTab} onClick={handleAddSchedule}>Добавить</Button>
                        <div className={style.cardGroup}>
                            <Card className={style.cardItem + ' ' + 'mt-3'}>  
                                <Card.Header>Восскресенье</Card.Header>
                                <Card.Body>
                                    {showTime && <div className={style.timeText}>
                                        <p>C: {startDay}</p>
                                        <p>До: {endDay}</p>
                                    </div>}
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}
