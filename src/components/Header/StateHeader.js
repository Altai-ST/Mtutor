import React from 'react'
import { useSelector } from 'react-redux'
import PrivateHeader from './PrivateHeader'
import PublicHeader from './PublicHeader'


const roles = {
    1: "admin",
    5: "tutor",
    10: "student"
}

const StateHeader = () => {
    const {role} = useSelector((state) => state.userRedusers.user)

    const currentRole = role ? role.role : null
        if (currentRole === null) {
            return <PublicHeader/>    
        }
        return <PrivateHeader role={roles[currentRole]}/>
}

export default StateHeader
