import React from "react";
const Distributor = () => (
  <section className="padding-bottom">
    <header className="section-heading heading-line">
      <h4 className="title-section text-uppercase">Nhà phân phối</h4>
    </header>
    <div className="row">
      <div className="col-md-3 col-sm-6">
        <article className="card card-post">
          <img
            src={require("../../assets/images/posts/1.jpg")}
            className="card-img-top"
          />
          <div className="card-body">
            <h6 className="title">Honda Văn Hải</h6>
            <p className="small text-uppercase text-muted">CÔNG TY TNHH THƯƠNG MẠI – DỊCH VỤ VĂN HẢI
Trụ sở :138 Trương Định, Khu phố 3, Phường 2, Thị xã Gò Công, Tiền Giang</p>
          </div>
        </article>{" "}
        {/* card.// */}
      </div>{" "}
      {/* col.// */}
      <div className="col-md-3 col-sm-6">
        <article className="card card-post">
          <img
            src={require("../../assets/images/posts/2.jpg")}
            className="card-img-top"
          />
          <div className="card-body">
            <h6 className="title">Cửa hàng xe máy Suzuki</h6>
            <p className="small text-uppercase text-muted">CÔNG TY TNHH VIỆT NAM SUZUKI
Địa chỉ: Đường số 2, KCN Long Bình, P. Long Bình,
TP. Biên Hòa, Đồng Nai</p>
          </div>
        </article>{" "}
        {/* card.// */}
      </div>{" "}
      {/* col.// */}
      <div className="col-md-3 col-sm-6">
        <article className="card card-post">
          <img
            src={require("../../assets/images/posts/3.jpg")}
            className="card-img-top"
          />
          <div className="card-body">
            <h6 className="title">Cửa hàng xe máy Yamaha  </h6>
            <p className="small text-uppercase text-muted">Yamaha Town là cửa hàng 3S (Bán hàng, Dịch vụ, Phụ tùng) ủy quyền và độc quyền của Công ty TNHH Yamaha Motor Việt Nam xe máy Yamaha. Hiện có hơn 500 cửa hàng Yamaha Town chính hãng tại tất cả các tỉnh thành trên toàn quốc.</p>
          </div>
        </article>{" "}
        {/* card.// */}
      </div>{" "}
      {/* col.// */}
      <div className="col-md-3 col-sm-6">
        <article className="card card-post">
          <img
            src={require("../../assets/images/posts/4.jpg")}
            className="card-img-top"
          />
          <div className="card-body">
            <h6 className="title">Pearson</h6>
            <p className="small text-uppercase text-muted">HỆ THỐNG CỬA HÀNG XE MÁY VĨNH TRƯỜNG
Cấp Ngày: 22 Tháng 03 Năm 2021
Kinh doanh: Xe Máy, Xe Điện
Địa chỉ: 478, Ô 1, Khu 2, Chợ Gạo, Tiền Giang
Điện Thoại: 0913 029 917
Email: xemayvinhtruong@gmail.com
Chủ quản: Nguyễn Vĩnh Trường</p>
          </div>
        </article>{" "}
        {/* card.// */}
      </div>{" "}
      {/* col.// */}
    </div>{" "}
    {/* row.// */}
  </section>
);
export default Distributor;
