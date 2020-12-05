import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Footer from "../../components/layout/Footer";
import UHeader from "../../components/Uheader/Uheader";
import Header from "../../components/Header";
import server from "../../config/index";

const index = ({ dropdownFilter }) => {
  const FILTER = [];
  const THREEXTHREE = [];
  const TOMO = [];
  const PERI = [];
  const ESC = [];
  const DIGI = [];
  const PRO = [];
  const OUT = [];
  const PRINTER = [];

  for (let i = 0; i < dropdownFilter.length; i++) {
    if (dropdownFilter[i].category === "Panoramic") {
      FILTER.push(dropdownFilter[i]);
    }
  }

  for (let i = 0; i < dropdownFilter.length; i++) {
    if (dropdownFilter[i].category === "CBCTs") {
      TOMO.push(dropdownFilter[i]);
    }
  }

  for (let i = 0; i < dropdownFilter.length; i++) {
    if (dropdownFilter[i].category === "X-ray Intraoral") {
      PERI.push(dropdownFilter[i]);
    }
  }

  for (let i = 0; i < dropdownFilter.length; i++) {
    if (dropdownFilter[i].category === "Intraoral Scanners") {
      ESC.push(dropdownFilter[i]);
    }
  }

  for (let i = 0; i < dropdownFilter.length; i++) {
    if (dropdownFilter[i].category === "Phosphor Scanners") {
      DIGI.push(dropdownFilter[i]);
    }
  }

  for (let i = 0; i < dropdownFilter.length; i++) {
    if (dropdownFilter[i].category === "Softwares") {
      PRO.push(dropdownFilter[i]);
    }
  }

  for (let i = 0; i < dropdownFilter.length; i++) {
    if (dropdownFilter[i].category === "Others") {
      OUT.push(dropdownFilter[i]);
    }
  }

  for (let i = 0; i < dropdownFilter.length; i++) {
    if (dropdownFilter[i].category === "3 in 1") {
      THREEXTHREE.push(dropdownFilter[i]);
    }
  }
  for (let i = 0; i < dropdownFilter.length; i++) {
    if (dropdownFilter[i].category === "Printers") {
      PRINTER.push(dropdownFilter[i]);
    }
  }

  //uniqui category
  const uniqCat = dropdownFilter.map((item) => item.category);
  let uniq = [...new Set(uniqCat)];
  //uniqui brand
  const uniqBr = dropdownFilter.map((item) => item.brand);
  let uniqB = [...new Set(uniqBr)];

  //uniqui model
  const uniqMd = dropdownFilter.map((item) => item.model);
  let uniqM = [...new Set(uniqMd)];

  console.log(uniq);

  return (
    <div>
      <UHeader />
      <Header />
      <div className="container-fluid bg-light ">
        <div className="row">
          <div className="col text-center">
            <div
              style={{
                position: "relative",
                color: "white",
              }}
            >
              <img
                width="1490px"
                height="200px"
                src="./static/images/classified/slide2x.png"
                alt="Card image"
              />

              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10%",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "10%",
                    left: "1%",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "10%",
                    left: "25%",
                  }}
                ></div>

                <div
                  style={{
                    position: "absolute",
                    top: "28%",
                    left: "1%",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "28%",
                    left: "21%",
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    top: "28%",
                    left: "26%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "40px" }} className="row">
          <div className="col-md-2">
            <hr style={{ boxShadow: "1px 1px rgba(0,0,0,0.10)" }} />
            <div>
              <h5>Category</h5>
              <div className="input-group mb-3">
                <ul style={{ listStyleType: "none" }}>
                  {uniq.map((item) => {
                    return (
                      <Link
                        key={item._id}
                        href="classified/filtercategory/[category]"
                        as={`classified/filtercategory/${item}`}
                      >
                        <a>
                          <li key={item._id}>{item}</li>
                        </a>
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <h5>Brand</h5>
              <div className="input-group mb-3">
                <ul style={{ listStyleType: "none" }}>
                  {uniqB.map((item) => {
                    return (
                      <Link
                        key={item._id}
                        href="classified/filtercategory/[category]"
                        as={`classified/filtercategory/${item}`}
                      >
                        <a>
                          <li key={item} value={item}>
                            {item}
                          </li>
                        </a>
                      </Link>
                    );
                  })}
                </ul>
              </div>
              <h5>Model</h5>
              <div className="input-group mb-3">
                <ul style={{ listStyleType: "none" }}>
                  {uniqM.map((item) => {
                    return (
                      <Link
                        key={item._id}
                        href="classified/filtercategory/[category]"
                        as={`classified/filtercategory/${item}`}
                      >
                        <a>
                          <li key={item} value={item}>
                            {item}
                          </li>
                        </a>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-12">
                <h1>Panoramic </h1>
                <Carousel data={FILTER} />
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              </div>

              <div className="col-md-12">
                <h1>3 in 1 </h1>
                <Carousel data={THREEXTHREE} />
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              </div>
              <hr />
              <div className="col-md-12">
                <h1>CBCTs </h1>
                <Carousel data={TOMO} />
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              </div>
              <div className="col-md-12">
                <h1>Phosphor Scanners </h1>
                <Carousel data={DIGI} />
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              </div>
              <div className="col-md-12">
                <h1>Softwares </h1>
                <Carousel data={PRO} />
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              </div>
              <div className="col-md-12">
                <h1>Printers </h1>
                <Carousel data={PRINTER} />
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              </div>
              <div className="col-md-12">
                <h1>X-ray Intraoral </h1>
                <Carousel data={PERI} />
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              </div>
              <div className="col-md-12">
                <h1>Intraoral Scanners </h1>
                <Carousel data={ESC} />
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              </div>
              <div className="col-md-12">
                <h1>Others </h1>
                <Carousel data={OUT} />
                <hr style={{ marginTop: "5px", marginBottom: "5px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${server}/getproduct`);
  const dropdownFilter = await res.json();
  return {
    props: {
      dropdownFilter,
    },
  };
}
export default index;

const EquipmentIcons = () => {
  return <div className="row"></div>;
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        width: "20px",
        background: "grey",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, width: "20px", background: "grey", zIndex: "1" }}
      onClick={onClick}
    />
  );
}

const Carousel = ({ data }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="col-md-12">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div key={item._id}>
              <Link
                href="classified/filtercategory/product/[_id]"
                as={`classified/filtercategory/product/${item._id}`}
              >
                <a>
                  <div
                    style={{
                      padding: "0 5px 0 5px",
                      maxWidth: "170px",
                      margin: "15px 0px",
                      position: "relative",
                      margin: "0px 10px",
                      border: "1px solid rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <img
                      style={{
                        minWidth: "160px",
                        maxWidth: "160px",
                        minHeight: "180px",
                        maxHeight: "180px",
                      }}
                      src={item.productImage[0]}
                    />
                    <p
                      style={{
                        marginLeft: "5px",
                        marginBottom: "3px",
                        marginTop: "5px",
                        color: "Grey",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {item.model}
                    </p>
                    <p style={{ marginLeft: "5px", marginBottom: "3px" }}>
                      {" "}
                      {item.year}
                    </p>
                    <p style={{ marginLeft: "5px", marginBottom: "3px" }}>
                      {" "}
                      {item.category}
                    </p>
                    <p style={{ marginLeft: "5px", marginBottom: "3px" }}>
                      {" "}
                      {item.description}
                    </p>
                    <p style={{ marginLeft: "5px", marginBottom: "3px" }}>
                      {" "}
                      {item.location}
                    </p>
                    <p style={{ marginLeft: "5px", marginBottom: "3px" }}>
                      {" "}
                      R$ {item.price}
                    </p>

                    <div
                      style={{
                        position: "absolute",
                        top: "10%",
                        left: "10%",
                        backgroundColor: "black",
                        width: "50px",
                        height: "28px",
                        opacity: "50%",
                        borderRadius: "5px",
                      }}
                    >
                      <p style={{ color: "white", textAlign: "center" }}>
                        Used
                      </p>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "30%",
                        left: "12%",
                      }}
                    ></div>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
