import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
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
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

export default function testimonial() {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container-fluid bg-light text-center">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">
            What Patient say <b>About Medical Press</b>
          </h1>
          <p style={{ fontWeight: "lighter" }}>
            What Patient say About Medical Press What Patient say About Medical
            Press What Patient say About Medical Press
          </p>
          <div
            style={{ width: "150px", margin: "0px auto", marginTop: "90px" }}
          >
            <Slider {...settings}>
              <div>
                <h3
                  style={{
                    background: "gray",
                    height: "125px",
                    width: "140px",
                    marginLeft: "5px",
                    borderRadius: "45%",
                  }}
                >
                  1
                </h3>
              </div>
              <div>
                <h3
                  style={{
                    background: "gray",
                    height: "125px",
                    width: "140px",
                    marginLeft: "5px",
                    borderRadius: "45%",
                  }}
                >
                  2
                </h3>
              </div>
              <div>
                <h3
                  style={{
                    background: "gray",
                    height: "125px",
                    width: "140px",
                    marginLeft: "5px",
                    borderRadius: "45%",
                  }}
                >
                  3
                </h3>
              </div>
              <div>
                <h3
                  style={{
                    background: "gray",
                    height: "125px",
                    width: "140px",
                    marginLeft: "5px",
                    borderRadius: "45%",
                  }}
                >
                  4
                </h3>
              </div>
              <div>
                <h3
                  style={{
                    background: "gray",
                    height: "125px",
                    width: "140px",
                    marginLeft: "5px",
                    borderRadius: "45%",
                  }}
                >
                  5
                </h3>
              </div>
              <div>
                <h3
                  style={{
                    background: "gray",
                    height: "125px",
                    width: "140px",
                    marginLeft: "5px",
                    borderRadius: "45%",
                  }}
                >
                  6
                </h3>
              </div>
            </Slider>
          </div>

          <div style={{ padding: "100px" }}>
            <p style={{ fontSize: "20px", fontWeight: "lighter" }}>
              What Patient say About Medical Press What Patient say About
              Medical Press What Patient say About Medical Press What Patient
              say About Medical Press What Patient say About Medical Press What
              Patient say About Medical Press
            </p>
            <div>
              <h3>Marina Forrest</h3>
              <hr />
              <p style={{fontWeight: "lighter" }}>
                Automatic
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
