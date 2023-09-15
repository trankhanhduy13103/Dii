import React from "react";

const Literature = () => (
  <section className="padding-bottom">
    <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase">Xe Thời thượng </h4>
    </header>
    <div className="card card-home-category">
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="home-category-banner bg-light-orange">
            <h5 className="title">Xe Sang trọng</h5>
            <p>
            Dòng xe phù hợp với "con nhà người ta" , "ông này bà nọ" xe dành cho các gia đình "nghèo  ".{" "}
            </p>
            <a href="/product-detail/1" className="btn btn-outline-primary rounded-pill">
              Xem ngay
            </a>
            {/*<img
              src={require("../../assets/images/items/1.jpg")}
              className="img-bg"
            />*/}
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-9">
          <ul className="row no-gutters bordered-cols">
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Sh italya 
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/1.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> 
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Exciter 175
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/2.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> 
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">Wave RSX</h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/3.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> 
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Sh 160i
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/4.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> 
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Blade
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/5.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> 
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Wave alpha
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/6.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> 
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Suzuki mash{" "}
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/7.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" /> 
                  </p>
                </div>
              </a>
            </li>
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                    Janus{" "}
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/13.jpg")}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" />  
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>{" "}
        {/* col.// */}
      </div>{" "}
      {/* row.// */}
    </div>{" "}
    {/* card.// */}
  </section>
);
export default Literature;
