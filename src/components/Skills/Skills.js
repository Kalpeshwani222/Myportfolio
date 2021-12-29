import React from "react";
import "./skills.css";
import LanguagesApi from "./LanguagesApi";
import WebtechApi from "./WebtechApi";
import DbAPi from "./DbApi";

const Skills = () => {
  return (
    <>
      <section>
        <div className="heading ">
          <h1 className="main-heading-secton text-align-center justify-content-center d-flex p-5  fw-bold">
            Skills
          </h1>
        </div>
        <div className="container-fluid mt-3 skills">
          <div className="row">
            <div className="col-11 col-md-10 col-lg-8 pt-5 mx-auto">
              <div className="" style={{ height: "15rem" }}>
                <h3 className="sub-heading-section text-align-center justify-content-center d-flex p-5  fw-bold">
                  --------<span className="tech-heading">Languages</span>
                  --------
                </h3>

                <div className="row languages-section">
                  {LanguagesApi.map((curElem) => {
                    const { id, image } = curElem;

                    return (
                      <>
                        <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-around" id={curElem.id}>
                          <img
                            src={curElem.image}
                            className="card-img-top card-img"
                            alt=""
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              {/* second */}

              <div className="" style={{ height: "15rem" }}>
                <h3 className="sub-heading-section text-align-center justify-content-center d-flex p-5  fw-bold">
                  --------Web Technologies--------
                </h3>

                <div className="row languages-section">
                  {WebtechApi.map((curElem) => {
                    const { id, image } = curElem;

                    return (
                      <>
                        <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-around" id={curElem.id}>
                          <img
                            src={curElem.image}
                            className="card-img-top card-img"
                            alt=""
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>

              {/* third  */}

              <div className="" style={{ height: "22rem" }}>
                <h3 className="sub-heading-section text-align-center justify-content-center d-flex p-5  fw-bold">
                  --Labraries & Frameworks--
                </h3>

                <div className="row languages-section">
                  <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-around ">
                    <img
                      src="./images/react.png"
                      className="card-img-top card-img"
                      alt=""
                    />
                  </div>

                  <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-around">
                    <img
                      src="./images/nodejs.png"
                      className="card-img-top card-img"
                      alt=""
                    />
                  </div>

                  <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-around ">
                    <img
                      src="./images/expressb.png"
                      className="card-img-top card-img"
                      alt=""
                      style={{ width: "100px", height: "50px" }}
                    />
                  </div>

                  <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-around mt-4">
                    <img
                      src="./images/flutter.png"
                      className="card-img-top card-img"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              {/* fourth */}

              <div className="" style={{ height: "15rem" }}>
                <h3 className="sub-heading-section text-align-center justify-content-center d-flex p-5  fw-bold">
                  --------Databases--------
                </h3>
                <div className="row languages-section">
                  {DbAPi.map((curElem) => {
                    const { id, image } = curElem;
                    return (
                      <>
                        <div className="col-4 col-md-4 col-lg-4 d-flex justify-content-around ">
                          <img
                            src={curElem.image}
                            className="card-img-top card-img"
                            alt=""
                          />
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
