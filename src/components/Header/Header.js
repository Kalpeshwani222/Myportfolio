import React from "react";
import "./header.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Header = () => {

   const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1MqnPyCoJxbj8dYa0-N7LbXjOQTarwELX/view?usp=sharing","_blank");
  }

  const { text } = useTypewriter({
    words: ["Full Stack Developer", "Flutter Developer","MERN Developer"],
    loop: false,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });

  return (
    <>
      <header>
        <section className="container main-here-container">

          <div className="row">
            
            {/* for text section */}
            <div className="col-12 col-md-6 d-flex justify-content-center flex-column align-item-start">
                <div className="for-text">
                <div className="header-body">
                  <h2 className="tops-heading hey ">Hey There,</h2><br />
                  <h1 className="tops-heading kal">I Am Kalpesh wani</h1><br/>
                </div>


                <div className="rolling-text">
                  <h1 className="tops-heading">I'm a {text}</h1><br/>
                </div>

                  <div className="headerimg">
                    <button onClick={downloadResume} className="btn btn-primary btn-lg px-4 me-md-2 mt-2 btn-download-resume">Download CV</button>
                  </div>
                  </div>

            </div>

              {/* for image section  */}
            <div className="col-12 col-md-6 header-right-side d-flex
                  justify-content-center align-items-center main-herosection-images
                  ">

                <img
                  src={require('./img/header.svg').default}
                  alt="heroimh"
                  className="img-fluid header-img"
                  style={{ width: "5000px", borderRadius: "25px" }}
                />
                
            </div>
          
          
          </div>

         
        </section>
      </header>
    </>
  );
};

export default Header;
