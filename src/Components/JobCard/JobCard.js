import React from 'react'
import "./JobCard.css"
function JobCard({ item }) {
    console.log(item)
    return (
        // <div className="jobCard">
        //     <div className="job_card_all">
        //         <div className="head_job_card">
        //             <h3>{item.jobTitle}</h3>
        //             <span className="timestamp">{new Date(item.createdAt).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</span>
        //         </div>
        //         <hr />
        //         <div className="job_desc">
        //             <p>{item.jobDesc}</p>

        //         </div>
        //     </div>
        // </div>
        <>
            <section class="post-area section-gap">
                <div class="container">
                    <div class="row justify-content-center d-flex">
                        <div class="col-lg-8 post-list">

                            <div class="single-post d-flex flex-row">
                                <div class="thumb">
                                    <img src="img/post.png" alt="" />

                                </div>
                                <div class="details">
                                    <div class="title d-flex flex-row justify-content-between">
                                        <div class="titles">
                                            <h4>{item.jobTitle}</h4>
                                            <h6>Experience Required: {item.jobExp}</h6>
                                        </div>
                                        <ul class="btns">
                                            <li id="jobCardApply"><a href="#">Apply</a></li>
                                        </ul>
                                    </div>
                                    <p class=" job_desc" style={{ fontSize: "17px" }}>
                                        {item.jobDesc}
                                    </p>
                                    <p class="address"><span class="lnr lnr-map"></span> {item.jobLoc}</p>
                                    <p class="address"><span class="lnr lnr-database"></span> {new Date(item.createdAt).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' })}</p>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            </section>
        </>
    )
}

export default JobCard
