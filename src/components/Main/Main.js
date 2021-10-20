import React from 'react'
import style from './main.module.scss'
import Carousel from 'react-bootstrap/Carousel'
import findTutorPhoto from '../../assets/image/find_tutors.jpg';
import CommunityPhoto from '../../assets/image/community.jpg'
import MeetPhoto from '../../assets/image/meet.jpg'

function Main() {
    return (
        <div className={style.main}>
                <Carousel className={style.carousel}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={findTutorPhoto}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={CommunityPhoto}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={MeetPhoto}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}

export default Main

