import React from 'react'
import "./Admin.css"
import AdminNavbar from '../Admin Navbar/AdminNavbar'
import Footer from "../Footer/index"
import PostAJob from '../Post A Job/PostAJob'

function Admin() {
    return (
        <div className="Admin_panel" style={{background: "-webkit-linear-gradient(left, #f1cdcd, #e5d6e6)"}}>
            <AdminNavbar/>
            <PostAJob/>
            <div className="admin_footer_reg">
              <Footer />
            </div>
        </div>
    )
}

export default Admin
