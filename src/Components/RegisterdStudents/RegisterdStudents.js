import React, { useEffect, useState } from 'react'
import StudentCard from '../StudentCard/StudentCard'
import "./RegisterdStudents.css"
import Axios from "../../axios";

function RegisterdStudents() {

    const [Students, setStudents] = useState([])

    useEffect(() => {
        Axios.get("/allUsers")
        .then((res)=>{
            setStudents(res.data)
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err.response)
        });
    }, [])


    return (
        <div className="registered">
            {Students.map((item)=>(<StudentCard item={item} />))}
            
        </div>
    )
}

export default RegisterdStudents
