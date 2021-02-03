import React, { useState } from 'react'
import "./Navbar.css"

function Navbar() {
    
    const [Toggle, setToggle] = useState(false)


    return (
        <div>
           <nav>
            <div className="logo">
                After Graduation
            </div>
            <ul className="nav-links" style={{
                transform : Toggle ? "translateX(0px)" : ""
            }}>
                <li><a>Home</a></li>
                <li><a>Register</a></li>
                <li><a>Job Postings</a></li>
                <li><a>About Us</a></li>
            </ul>
            <i onClick={()=>setToggle(!Toggle)} className="fas fa-bars burger"></i>
           </nav>
        </div>
    )
}

export default Navbar
