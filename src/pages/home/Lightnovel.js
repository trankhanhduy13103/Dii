import React from "react";
import { useEffect, useState } from "react";
import productservice from "../../service/ProductSevice";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../config";
function Lightnovel() {
  const [products, setProducts] = useState([]);
  useEffect(function () {
    (async function () {
      await productservice.getProductByCategoryId(2)
        .then(function (result) {
          setProducts(result.data.product);
        }
        );
    })();
  }, []);
  return (
  <section className="padding-bottom">
    <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase">Xe Số</h4>
    </header>
    <div className="card card-home-category">
      <div className="row no-gutters">
        <div className="col-md-3">
          <div className="home-category-banner bg-light-orange">
            <h5 className="title">Dòng xe cổ điển</h5>
            <p>
            Dòng xe phù hợp với lứa tuổi trẻ học sinh sinh viên và người lao đông tay chân.{" "}
            </p>
            <a href="/category" className="btn btn-outline-primary rounded-pill">
              Xem Ngay
            </a>
            
          </div>
        </div>{" "}
        {/* col.// */}
        <div className="col-md-9">
          <ul className="row no-gutters bordered-cols">
          {products.map(function (product, index) {
                return (
            <li className="col-6 col-lg-3 col-md-4">
              <a href="/product-detail/1" className="item">
                <div className="card-body">
                  <h6 className="title">
                  {product.name}  
                  </h6>
                  <img
                    className="img-sm float-right"
                    src={urlImage + 'product/' + product.image}
                  />
                  <p className="text-muted">
                    <i className="fa fa-map-marker-alt" />{product.metakey}
                  </p>
                </div>
              </a>
            </li>
            )
          }
          )}
          </ul>
        </div>{" "}
        {/* col.// */}
      </div>{" "}
      {/* row.// */}
    </div>{" "}
    {/* card.// */}
  </section>
);
}
export default Lightnovel;
