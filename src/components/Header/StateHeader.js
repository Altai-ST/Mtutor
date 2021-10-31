import React from 'react'
import { useSelector } from 'react-redux'
import HeaderForAdmin from '../ForAdmin/HeaderForAdmin'
import HeaderForStudent from '../ForStudent/HeaderStudent'
import HeaderForTutor from '../ForTutor/HeaderForTutor'
import Header from '../Header/Headers'

const StateHeader = () => {
    const state = useSelector((state) => state.userRedusers.user)
    console.log(state === null)
        if (state === 1) {
            return <HeaderForAdmin/>    
        }else if(state === 5) {
            return <HeaderForTutor/>
        } else if (state === 10) {
            return <HeaderForStudent/>
        } else if (state === null){
            return <Header/>
        }

    return (
        <>
        </>
    )
}

export default StateHeader
