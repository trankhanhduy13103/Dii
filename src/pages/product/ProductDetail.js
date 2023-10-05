import React from "react";
import { useEffect, useState } from "react";
import productservice from "../../service/ProductSevice";
import { Link, useParams } from "react-router-dom";
import { urlImage } from "../../config";

function ProductDetail() {
    const [product, setProduct] = useState([]);
    const {slug} = useParams();
    useEffect(function () {
        (async function () {
            await productservice.getProductBySlug(slug)
                .then(function (result) {
                    if(result.data.success===true)
                    {
                    setProduct(result.data.product);
                }
                }
                );
        })();
    }, []);
    return (
    <>
    <section className="py-3 bg-light">
      <div className="container">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Category name</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Sub category</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Items
          </li>
        </ol>
      </div>
    </section>
    {/* ========================= SECTION CONTENT ========================= */}
    <section className="section-content bg-white padding-y">
      <div className="container">
        {/* ============================ ITEM DETAIL ======================== */}
        <div className="row">
          <aside className="col-md-6">
            <div className="card">
              <article className="gallery-wrap">
                <div className="img-big-wrap">
                  <div>
                    {" "}
                    <a href="#">
                    <img src={urlImage+'product/'+product.image} />
                    </a>
                  </div>
                </div>{" "}
                {/* slider-product.// */}
                <div className="thumbs-wrap">
                  <a href="#" className="item-thumb">
                    {" "}
                    <img src={urlImage+'product/'+product.image} />
                  </a>

                </div>{" "}
                {/* slider-nav.// */}
              </article>{" "}
              {/* gallery-wrap .end// */}
            </div>{" "}
            {/* card.// */}
          </aside>
          <main className="col-md-6">
            <article className="product-info-aside">
              <h2 className="title mt-3">{product.name}  </h2>
              <div className="rating-wrap my-3">
                <ul className="rating-stars">
                  <li style={{ width: "80%" }} className="stars-active">
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" /> <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </li>
                </ul>
                <small className="label-rating text-muted">132 reviews</small>
                <small className="label-rating text-success">
                  {" "}
                  <i className="fa fa-clipboard-check" /> 154 orders{" "}
                </small>
              </div>{" "}
              {/* rating-wrap.// */}
              <div className="mb-3">
                <var className="price h4">{product.price}.000.000 VNĐ</var>
                <span className="text-muted">{product.price_sale}.000.000 VNĐ</span>
              </div>{" "}
              {/* price-detail-wrap .// */}
              <p>
              {" "}
              </p>
              <dl className="row">
                <dt className="col-sm-3">Hảng Xe</dt>
                <dd className="col-sm-9">
                  <a href="#">{product.metakey}</a>
                </dd>
                <dt className="col-sm-3">Mã lực</dt>
                <dd className="col-sm-9">59</dd>
                <dt className="col-sm-3">Bảo hành</dt>
                <dd className="col-sm-9">1 năm</dd>
                <dt className="col-sm-3">Giao hàng</dt>
                <dd className="col-sm-9">24 giờ</dd>
                <dt className="col-sm-3">Tình trạng</dt>
                <dd className="col-sm-9">trong Kho</dd>
              </dl>
              <div className="form-row  mt-4">
                <div className="form-group col-md flex-grow-0">
                  <div className="input-group mb-3 input-spinner">
                    <div className="input-group-prepend">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-plus"
                      >
                        {" "}
                        +{" "}
                      </button>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue={1}
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-light"
                        type="button"
                        id="button-minus"
                      >
                        
                      </button>
                    </div>
                  </div>
                </div>{" "}
                {/* col.// */}
                <div className="form-group col-md">
                  <a href="#" className="btn  btn-primary">
                    <i className="fas fa-shopping-cart" />{" "}
                    <span className="text">Thêm vào giỏ</span>
                  </a>
                  <a href="#" className="btn btn-light">
                    <i className="fas fa-envelope" />{" "}
                    <span className="text">Hỗ trợ</span>
                  </a>
                </div>{" "}
                {/* col.// */}
              </div>{" "}
              {/* row.// */}
            </article>{" "}
            {/* product-info-aside .// */}
          </main>{" "}
          {/* col.// */}
        </div>{" "}
        {/* row.// */}
        {/* ================ ITEM DETAIL END .// ================= */}
      </div>{" "}
      {/* container .//  */}
    </section>
    {/* ========================= SECTION CONTENT END// ========================= */}
    {/* ========================= SECTION  ========================= */}
    <section className="section-name padding-y bg">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h5 className="title-description">Mô tả</h5>
            <p>
              Xe 
            </p>
            <ul className="list-check">
              <li>Material: Stainless steel</li>
              <li>Weight: 82kg</li>
              <li>built-in drip tray</li>
              <li>Open base for pots and pans</li>
              <li>On request available in propane execution</li>
            </ul>
            
          
          </div>{" "}
          
          {/* col.// */}
        </div>{" "}
        {/* row.// */}
      </div>{" "}
      {/* container .//  */}
    </section>
  </>

);
}
export default ProductDetail;