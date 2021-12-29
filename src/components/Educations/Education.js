import React from 'react'
import './educations.css'
const Education = () => {
    return (
        <>
            <section className="education-section">
          <div className="container">

            <div className="heading ">
              <h1 className="main-heading-secton text-align-center justify-content-center d-flex p-5  fw-bold">Education</h1>
            </div>
            <div className="row shadow-lg">
              <div className=" col-12 col-lg timeline-box">
                        
                        
                        <div className=" timeline shadow-dark">
                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h6 className="timeline-date">
                                    <i className="fa fa-calendar" style={{"font-family": "Exo 2 serif"}}></i> 2020 - 2023
                                </h6>
                                <h4 className="timeline-title">Bachelor Of Engineering In Information Technology</h4>
                                <p className="timeline-text">
                                  SSBT's College of Engineering and Technology Jalgaon, Maharashtra.
                                    <br /> CGPA: <b>9.80</b>
                                </p>
                            </div>


                             <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h6 className="timeline-date">
                                    <i className="fa fa-calendar"></i> 2017 - 2020
                                </h6>
                                <h4 className="timeline-title">Diploma In Computer Engineering</h4>
                                <p className="timeline-text">
                                   Government Polytechnic Jalgaon, Maharashtra.
                                    <br /> Percentage: <b>84.86%</b>
                                </p>
                            </div>


                            <div className="timeline-item">
                                <div className="circle-dot"></div>
                                <h6 className="timeline-date">
                                    <i className="fa fa-calendar"></i> 2016-2017
                                </h6>
                                <h4 className="timeline-title">Secondary School Certificate (SSC)</h4>
                                <p className="timeline-text">
                                   RR Vidyalaya Jalgaon, Maharashtra.
                                    <br /> Percentage: <b>83.40%</b>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
          </div>

      </section>
        </>
    )
}

export default Education
