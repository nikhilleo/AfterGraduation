import React from 'react'
import "./JobCard.css"
function JobCard({item}) {
    return (
        <div className="jobCard">
            <div className="job_card_all">
                <div className="head_job_card">
                    <h3>{item.jobTitle}</h3>
                    <span className="timestamp">{new Date(item.createdAt).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'})}</span>
                </div>
                <hr/>
                <div className="job_desc">
                    <p>{item.jobDesc}</p>
                </div>
            </div>
        </div>
    )
}

export default JobCard
