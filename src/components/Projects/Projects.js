import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./project.css";
import projectApi from "./projectApi";

const Projects = () => {
  const [projectData, setProjectData] = useState(projectApi);
  

    const handleClick = (url) =>{
        window.open(url,"_blank");
    }

    const VedioDemo = (url) =>{
      window.open(url,"_blank")
    }

  return (
    <>
      <section>
        <div class="container project">
           <div className="heading ">
              <h1 className="main-heading-secton text-align-center justify-content-center d-flex p-5  fw-bold">Projects</h1>
            </div>



          <div className="row mt-5">
            {projectData.map((curEle) => {
              const { id, image, title, desc, livedemo } = curEle;

              return (
                <>
                  {/* <div className="col-sm-4 py-3"> */}
                   <div className="col-12 col-md-6 col-lg-4 py-3">
                    <div className="card ">
                      <img src={curEle.image} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <div className="card__content">
                          <div className=" font-weight-bold card__title">{curEle.title}</div>
                          <p className="card__text lead">{curEle.desc}</p>
                        </div>

                       
                          <div className="row mt-3">


                            <div className="col-6 col-md-6 col-lg-6 d-flex justify-content-around">
                           
                              <button 
                              className="btn btn-primary btn-lg px-4 me-md-2 mt-2 btn-download-resume"
                              onClick={() => handleClick(curEle.livedemo)}
                               >Live Demo</button>
                           
                            </div>

                            <div className="col-6 col-md-6 col-lg-6 d-flex justify-content-around">
                              <button className="btn btn-primary btn-lg px-4 me-md-2 mt-2 btn-download-resume"
                              onClick={()=> VedioDemo(curEle.vediodemo)}
                              >Video Demo</button>
                            </div>
                          </div>
                        
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>


        </div>
      </section>
    </>
  );
};

export default Projects;
