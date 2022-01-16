import React from "react";
import "./about.css";

const About = () => {

  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1MqnPyCoJxbj8dYa0-N7LbXjOQTarwELX/view?usp=sharing","_blank");
  }
  return (
    <>
      <section className="container mt-5">
        <div className="main-aboutme">

           <div className="heading ">
              <h1 className="main-heading-secton text-align-center justify-content-center d-flex p-5  fw-bold">About me</h1>
            </div>

          <div className="row">
            <div className="col-12 col-md-12 col-lg-8 order-lg-first order-last">
              <div className="col-lg-11 para-style">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Hii, I'm Kalpesh Wani
                </h1>
                <p className="mt-5 aboutme-hero-para">
                  Highly motivated and detail-oriented software engineer looking
                  for opportunity in Full Stack Development. using my quick
                  learning and abiity to leverage my skills and problem-solving
                  capability to understand and develop real world applications
                  as per the requirements to contribute in organizations
                  success.
                </p>

                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    onClick={downloadResume}
                    className="btn btn-primary btn-lg px-4 me-md-2 mt-2 btn-download-resume"
                    style={{"font-family": "Exo 2 serif"}}
                  >
                    Download CV
                  </button>

                </div>
              </div>
            </div>

            <div className="col-12 col-sm-8 col-lg-4 justify-content-center align-item-center d-flex order-md-first order-sm-first">
              <div class="intro">
                <img
                  src="images/kal.png"
                  alt="kalpesh-wani Picture"
                  class="shadow-dark"
                  style={{"width":"200px","height":"200px"}}
                />
                <h2 className="tops-heading kal" style={{"font-size":"3rem", "font-family": "Exo 2 serif", }}>Kalpesh Wani</h2>
                <p className="" style={{"font-size":"1.7rem","font-family": "Exo 2 serif",}}>Bachelor of Engineering Student</p>  
                <p className="" style={{"font-size":"1.7rem","font-family": "Exo 2 serif",}}>Information Technology</p>
                
               



              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
