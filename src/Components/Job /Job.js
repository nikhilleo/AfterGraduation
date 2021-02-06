import React, { useEffect, useState } from 'react'
import Axios from "../../axios"
import JobCard from "../JobCard/JobCard"
function Job() {
    
    const [Jobs, setJobs] = useState([])

    useEffect(() => {
        Axios.get("/jobs/getAllJobs").then((res)=>{
            console.log(res.data);
            setJobs(res.data);
        }).catch((err)=>{
            console.log(err.response);
        })
    }, [])

    return (
        <div>
            {Jobs.map(item => (<JobCard item={item}/>))}
        </div>
    )
}

export default Job
