import React, { useState, useEffect } from 'react'
import { Tabs, Tab, Button, Card, Form } from 'react-bootstrap'
import style from './tutorSchedule.module.scss'
import { Link } from 'react-router-dom'
import { setSchedule } from '../../container/httpRequest'
import { useHistory } from 'react-router'
import TabContent from './tabContent'

export default function TutorSchedule() {
    const [activeTab, setActiveTab] = useState('1')
    const [events, setEvents] = useState([ 
        {
        day: '1',
        times: []
      },
      {
          day: '2',
          times: []
      },
      {
          day: '3',
          times: []
      },
      {
          day: '4',
          times: []
      },
      {
          day: '5',
          times: []
      },
      {
          day: '6',
          times: []
      },
      {
          day: '7',
          times: []
      },
      ]
    )
    
    const dataScheldule =[
        {value:'1', day:'Понедельник'},
        {value:'2', day:'Вторник'},
        {value:'3', day:'Среда'},
        {value:'4', day:'Четверг'},
        {value:'5', day:'Пятница'},
        {value:'6', day:'Суббота'},
        {value:'7', day:'Восскресенье'}
    ]

   
    const history = useHistory()

    const handleSubmit=async()=>{
        console.log(events)
        const res = await setSchedule({events:events})
        console.log(res)
        history.push('/tutorQual')
    }
    console.log(events)
    return (
        <div>
            <div className={style.btnBlock+' '+'my-3 mx-3'}>
                <Button onClick={handleSubmit} className='mx-3'>Сохранить расписание</Button>
                <Link to='/tutorQual'><Button variant='danger'>Отмена</Button></Link>
            </div>
            <Tabs
                id="controlled-tab-example"
                activeKey={activeTab}
                onSelect={(k) => setActiveTab(k)}
                className={style.mainBlock}
            >
            {dataScheldule.map(el=>{
                return(
                   <Tab eventKey={el.value} title={el.day}>
                    <TabContent tabValue={activeTab} tabEvents={events} setTabEvents={setEvents} tabTitle={el.day}/>
                </Tab> 
                ) 
            })}
            </Tabs>
        </div>
    )
}
