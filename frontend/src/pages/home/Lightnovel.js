import React from "react";
const Lightnovel = () => (
  <section className="padding-bottom">
    <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase">Xe Ngon bổ rẻ</h4>
    </header>
    <div className="card card-home-category">
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="home-category-banner bg-light-orange">
            <h5 className="title">Xe máy "hạt dẻ"</h5>
            <p>
            Dòng xe phù hợp với lứa tuổi trẻ học sinh sinh viên và người lao đông tay chân.{" "}
            </p>
            <a href="/product-detail/1" className="btn btn-outline-primary rounded-pill">
              Xem Ngay
            </a>
            {/*<img
              src={require("../../assets/images/items/14.jpg")}
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
                    Lead
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/16.jpg")}
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
                    5cm/s
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/17.jpg")}
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
                  Thumbalnal
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/18.jpg")}
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
                    Yaz
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/19.jpg")}
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
                    Sirus
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/20.jpg")}
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
                    GSX S150
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/21.jpg")}
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
                  Air Black
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/22.jpg")}
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
                  Click Thái
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={require("../../assets/images/items/23.jpg")}
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
export default Lightnovel;
