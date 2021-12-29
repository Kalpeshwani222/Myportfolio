import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="heading ">
                <h1 className="main-heading-secton text-align-center justify-content-center d-flex p-2  fw-bold">
                  Contact Us
                </h1>
              </div>
            </div>
          </div>

          

          <div className="footerimagecont p-4 pb-0">
            <section className="mb-4 d-flex justify-content-around">
              
              <a href="mailto:wanikalpeshanil@gmail.com">
                <i className="fas fa-envelope" style={{"color":"blue"}}></i>
              </a>

              <a href="https://github.com/Kalpeshwani222" target="_kalpeshwani">
               <i className="fab fa-github" style={{"color":"#171515"}}></i>
              </a>

              <a href="https://youtube.com/channel/UCNhcwdT-CRazfiAW7iVVDTw" target="_kalpeshwani">
                <i className="fab fa-youtube" style={{"color":"red"}}></i>
              </a>

              <a href="https://linkedin.com/in/wanikalpesh" target="_kalpesh">
                <i className="fab fa-linkedin" style={{"color":"#0e76a8"}}></i>
              </a>

              <a href="https://www.instagram.com/kalpesh.wani.184/" target="_blank">
              <i className="fab fa-instagram" style={{"color":"#8a3ab9"}}></i>
              </a>
            </section>
          </div>

          <hr />

          <div className="mt-5">
            <p className="footer-hero-para text-center w-100">
              Copyright @ 2021 Kalpesh Wani. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
