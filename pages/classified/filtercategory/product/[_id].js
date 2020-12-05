import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { MdEditLocation } from "react-icons/md";
import { BiMessageEdit } from "react-icons/bi";
import Footer from "../../../../components/layout/Footer";
import Header from "../../../../components/Header";
import UHeader from "../../../../components/Uheader/Uheader";
import Link from "next/link";
import server from "../../../../config/index";

const Classified3 = ({ product }) => {
  const Image = [
    { id: 1, img: product[0].productImage[0] },
    { id: 2, img: product[0].productImage[1] },
    { id: 3, img: product[0].productImage[2] },
    { id: 4, img: product[0].productImage[3] },
    { id: 5, img: product[0].productImage[4] },
  ];

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: true,
  };
  const [recents, setRecents] = useState([]);
  const [image, setImage] = useState(Image[0].img);

  const [width, setWidth] = useState("100px");
  useEffect(() => {
    async function GetRecent() {
      const res = await fetch(`${server}/getproduct`);
      const json = await res.json();
      setRecents(json);
    }
    GetRecent();
  }, []);
  return (
    <div>
      <UHeader />
      <Header />
      <div className="container-fluid bg-light">
        <div className="row mt-5 bg-light">
          <div className="col-md-6">
            <div style={{ position: "relative" }}>
              <img width="100%" height="500px" src={image} />
              <div
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "3%",
                  maxWidth: "100px",
                }}
              >
                <img
                  width="100%"
                  height="100px"
                  style={{ padding: "10px" }}
                  src={Image[0].img}
                  onClick={() => setImage(Image[0].img)}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "20%",
                  maxWidth: width,
                }}
              >
                <img
                  width="100%"
                  height="100px"
                  style={{ padding: "10px" }}
                  src={Image[1].img}
                  onClick={() => setImage(Image[1].img)}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  right: "5%",
                  marginBottom: "10px",
                  top: "40%",
                  maxWidth: width,
                }}
              >
                <img
                  width="100%"
                  height="100px"
                  style={{ padding: "10px" }}
                  src={Image[2].img}
                  onClick={() => setImage(Image[2].img)}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  marginBottom: "10px",
                  right: "5%",
                  top: "60%",
                  maxWidth: width,
                }}
              >
                <img
                  width="100%"
                  height="100px"
                  style={{ padding: "10px" }}
                  src={Image[3].img}
                  onClick={() => setImage(Image[3].img)}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  marginBottom: "10px",
                  right: "5%",
                  top: "80%",
                  maxWidth: width,
                }}
              >
                <img
                  width="100%"
                  src={Image[4].img}
                  style={{ padding: "10px" }}
                  height="100px"
                  onClick={() => setImage(Image[4].img)}
                />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              style={{
                marginLeft: "80px",
                marginTop: "70px",
              }}
            >
              <div>
                <h1>{product[0].model}</h1>
                <p>
                  <MdEditLocation color="green" />
                  {product[0].location}
                </p>
                <h3 style={{ color: "green" }}>Price {product[0].price}</h3>
              </div>
            </div>
            <div style={{ marginLeft: "85px", marginTop: "20px" }}>
              <p>{product[0].description}</p>
              <p style={{ color: "grey" }}>
                Year :<span style={{ color: "black" }}>2013</span> Brand :
                <span style={{ color: "black" }}> {product[0].model}</span>
              </p>
              <p style={{ color: "grey" }}>
                Category
                <span style={{ color: "black" }}> {product[0].category}</span>
              </p>
              <p style={{ color: "grey" }}>
                Reason for sale :
                <span style={{ color: "black" }}>{product[0].brand}</span>{" "}
                Exposis (aprox) :<span style={{ color: "black" }}> 0</span>
              </p>
            </div>
            <div>
              <form>
                <div className="row">
                  <div className="col-md-8 mb-2">
                    <input className="form-control" placeholder="Name" />
                  </div>

                  <div className="col-md-8 mb-2">
                    <input className="form-control" placeholder="Phone" />
                  </div>

                  <div className="col-md-8 mb-2">
                    <input className="form-control" placeholder="Email" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <textarea className="form-control mt-2" rows="3"></textarea>
                  </div>
                </div>
                <button
                  style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "9px 30px",
                    borderRadius: "3px",
                    border: "1px solid white",
                    marginTop: "10px",
                  }}
                >
                  Enter
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row mt-5 mb-5">
          <div className="col">
            <div className="container">
              <Slider {...settings}>
                {recents
                  .map((recent) => {
                    return (
                      <div key={recent.id}>
                        <Picturelabels prodImage={recent.productImage[0]} />
                      </div>
                    );
                  })
                  .slice(0, 5)}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Classified3;

const Picturelabels = ({ prodImage }) => {
  return (
    <div>
      <div
        style={{ maxWidth: "250px", margin: "0px 10px", position: "relative" }}
      >
        <img width="100%" src={prodImage} />
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "10%",
            backgroundColor: "black",
            width: "80px",
            height: "28px",
            opacity: "50%",
            borderRadius: "5px",
          }}
        >
          <p style={{ color: "white", textAlign: "center" }}>For Sale</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "12%",
          }}
        >
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "2px 10px",
              borderRadius: "4px",
              border: "1px solid grey",
            }}
          >
            Price Contact for sale
          </button>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ query }) {
  const { _id } = query;
  const res = await fetch(`${server}/getproduct/${_id}`);
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
}
