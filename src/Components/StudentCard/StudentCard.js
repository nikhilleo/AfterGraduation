import React from 'react'
import "./StudentCard.css"


function StudentCard({item}) {
    return (
        <div className="stud_info">
            <span>Name Of Student : <span className="studVal">{item.name}</span></span>
            <span>Email Of Student: <span className="studVal">{item.email}</span></span>
            <span>Mobile Number Of Student: <span className="studVal">{item.mobile}</span></span>
            <span>Alternate Mobile Number Of Student: <span className="studVal">{item.altmobile}</span></span>
            <span>Qualification Of Student: <span className="studVal">{item.qualification}</span></span>
            <span>Specialization Of Student: <span className="studVal">{item.specialization}</span></span>
        </div>
    )
}

export default StudentCard
