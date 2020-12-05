import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Header from "../../../components/Header";
import UHeader from "../../../components/Uheader/Uheader";
import Footer from "../../../components/layout/Footer";
import server from "../../../config/index";

export default function Category({ query }) {
  const [recentdata, setRecentdata] = useState([]);
  const [carddata, setCarddata] = useState([]);
  const [rating, setRatting] = useState("");
  const [term, setTerm] = useState(query.category);
  const [category, setCategory] = useState("category");
  const [dropdown, setDropdown] = useState([]);
  //uniqui category
  const uniqCat = dropdown.map((item) => item.category);
  let uniq = [...new Set(uniqCat)];
  //uniqui brand
  const uniqBr = dropdown.map((item) => item.brand);
  let uniqB = [...new Set(uniqBr)];

  //uniqui model
  const uniqMd = dropdown.map((item) => item.model);
  let uniqM = [...new Set(uniqMd)];

  const onCatChange = (e) => {
    setTerm(e.target.value);
    setCategory("category");
  };
  const onBrandChange = (e) => {
    setTerm(e.target.value);
    setCategory("brand");
  };
  const onModelChange = (e) => {
    setTerm(e.target.value);
    setCategory("model");
  };

  useEffect(() => {
    axios.get(`${server}/getproduct`).then((res) => {
      const { data } = res;
      setDropdown(data);
    });
    axios.get(`${server}/getproductcategory/${term}`).then((res) => {
      const { data } = res;
      if (!data) {
        console.log("Data Not loaded");
      } else {
        setCarddata(data);
      }
    });
    axios.get(`${server}/getrecentdata`).then((res) => {
      const { data } = res;
      setRecentdata(data);
    });
  }, [term, category]);

  return (
    <div>
      <UHeader />
      <Header />
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col text-center">
            <div
              style={{
                position: "relative",
                color: "white",
              }}
            >
              <img
                margin="0"
                width="1490px"
                height="200px"
                src="../../static/images/classified/slide2x.png"
                alt="Card image"
              />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "40px" }} className="row">
          <div className="col-md-2">
            <hr />
            <div>
              <h5>Category</h5>
              <div className="input-group mb-3">
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={onCatChange}
                >
                  {uniq.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </div>
              <h5>Brand</h5>
              <div className="input-group mb-3">
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={onBrandChange}
                >
                  {uniqB.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </div>
              <h5>Model</h5>
              <div className="input-group mb-3">
                <select
                  className="custom-select"
                  id="inputGroupSelect01"
                  onChange={onModelChange}
                >
                  {uniqM.map((item) => {
                    return <option key={item}>{item}</option>;
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="row">
              {carddata.map((item) => {
                return (
                  <div key={item._id} className="col-md-3 mt-3">
                    <Link href="product/[_id]" as={`product/${item._id}`}>
                      <a>
                        <Carusel
                          location={item.location}
                          model={item.model}
                          category={item.category}
                          image1={item.productImage[0]}
                          price={item.price}
                          year={item.year}
                        />
                      </a>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col">
            <h5 style={{ marginTop: "15px" }}>Recent</h5>
            {recentdata.map((item) => {
              return (
                <Link
                  href="product/[_id]"
                  as={`product/${item._id}`}
                  key={item._id}
                >
                  <a>
                    <div
                      style={{
                        display: "flex",
                        marginBottom: "5px",
                        marginTop: "15px",
                      }}
                    >
                      <div style={{ width: "50%" }}>
                        <img
                          style={{
                            minWidth: "90px",
                            maxWidth: "90px",
                            minHeight: "90px",
                            maxHeight: "90px",
                          }}
                          src={item.productImage[0]}
                        />
                      </div>
                      <div style={{ fontSize: "9px", width: "50%" }}>
                        <p style={{ fontSize: "15px" }}>{item.model}</p>
                        <p style={{ fontSize: "15px" }}>{item.category}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const Carusel = ({ location, model, category, image1, price, year }) => {
  return (
    <div>
      <div
        style={{
          padding: "0 5px 0 3px",
          maxWidth: "170px",
          margin: "15px 0px",
          position: "relative",
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
          src={image1}
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
          {model}
        </p>
        <p style={{ marginLeft: "5px", marginBottom: "3px" }}>{year}</p>
        <p style={{ marginLeft: "5px", marginBottom: "3px" }}>{category}</p>
        <p style={{ marginLeft: "5px", marginBottom: "3px" }}>{location}</p>
        <p style={{ marginLeft: "5px", marginBottom: "3px" }}>R$ {price}</p>

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
          <p style={{ color: "white", textAlign: "center" }}>Used</p>
        </div>
        <div
          style={{
            position: "absolute",
            top: "330%",
            left: "12%",
          }}
        ></div>
      </div>
    </div>
  );
};

Category.getInitialProps = async ({ query }) => {
  return { query };
};
