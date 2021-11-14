import React, { useState } from 'react'
import Select from 'react-select'
import { getSearchingSubjectRequest } from '../../../container/httpRequest';
import { useSelector } from 'react-redux'
import { rootReducer } from '../../../redux/redusers';

const CustomSelect = (props) => {
    const [inputValue, setInputValue] = useState("");
    // const [courses, setCourses] = useState()
    const courses = useSelector(state => state.rootReducer.courses)
    console.log(courses)

    const getSearchingSubject = async () => {
        const data = await getSearchingSubjectRequest(inputValue);
        // setCourses(data);
        console.log(inputValue);
        console.log(data);
    };

    const option= courses.length && courses.map((el)=>({
        value: el.id, label:el.name
    })) 
    return (
        <div>
            <Select options={option} onChange={getSearchingSubject} placeholder='Search'/>
        </div>
    )
}

export default CustomSelect
