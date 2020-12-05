import React, { useState, useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { WiTime1 } from "react-icons/wi";
import { FaGreaterThan } from "react-icons/fa";
import Slider from "react-slick";
import axios from "axios";
import server from "../../config/index";

const Section3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  const [data, SetData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`${server}/getblog`)
      .then((res) => {
        const { data } = res;
        SetData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Section 2 error");
        setLoading(true);
      });
  }, []);
  const uniq = [...new Set(data)]
    .filter((item) => item.category === "Periapicais")
    .slice(0, 4);
  const digituniq = [...new Set(data)]
    .filter((item) => item.category === "Digitalizadores")
    .slice(0, 4);
  console.log(digituniq);
  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className="business-heading">
            <h5>Periapicais</h5>
            <p>VIEW ALL</p>
          </div>
          <div className="row">
            <div className="col-md-8 mt-1">
              <div class="card">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <img
                    class="card-img-top"
                    src={uniq[0].photo}
                    alt="Card image cap"
                  />
                )}
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <div class="card-img-overlay mt-5 text-white">
                    <h5 class="card-title bg-orange">{uniq[0].title}</h5>
                    <p class="card-text">
                      How do you land that job after collage?
                      <br />
                      <span>by Tiem Neguyn</span>
                    </p>
                  </div>
                )}
                <div class="card-body">
                  {loading ? (
                    <div>Loading...</div>
                  ) : (
                    <p class="card-text font-news">
                      {uniq[0].body}
                      <span className="heading-business-news">readmore</span>
                    </p>
                  )}
                  <div>
                    <FiMessageCircle color="orangered" />
                    <span className="business-news-heading">5</span>
                    <WiTime1 style={{ marginLeft: "20px" }} color="orangered" />
                    <span className="business-news-heading">Jun 07,2015</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div
                  className="business-news"
                  style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  <p>
                    <span className="business-news-heading">
                      {uniq[1].title}
                    </span>
                    <br />
                    {uniq[1].body}
                  </p>
                </div>
              )}
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div
                  className="business-news"
                  style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  <p>
                    <span className="business-news-heading">
                      {uniq[2].title}
                    </span>
                    <br />
                    {uniq[2].body}
                  </p>
                </div>
              )}
              {loading ? (
                <div>Loading...</div>
              ) : (
                <div
                  className="business-news"
                  style={{ overflow: "hidden", textOverflow: "ellipsis" }}
                >
                  <p>
                    <span className="business-news-heading">
                      {uniq[2].title}
                    </span>
                    <br />
                    {uniq[2].body}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <div className="business-heading">
              <h5>Digitalizadores</h5>
              <p>VIEW ALL</p>
            </div>
            <Slider {...settings}>
              {digituniq.map((item) => {
                return (
                  <div>
                    <div class="card">
                      <img
                        class="card-img-top"
                        src={item.photo}
                        alt="Card image cap"
                      />
                      <div class="card-img-overlay mt-5 text-white">
                        <h5 class="card-title bg-orange">{item.title}</h5>
                        <p class="card-text">
                          {item.body}
                          <br />
                          <span>by Tiem Neguyn</span>
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div class="card" style={{ width: "100%" }}>
            <img
              class="card-img-top"
              src="https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=980&q=80"
              alt="Card image cap"
            />
            <div class="card-img-overlay text-white">
              <div className="main-quote">
                <h5 class="card-title">MAIN QUOTE</h5>
              </div>
              <p className="quote-text" class="card-text">
                Desgin is not just what it look like and feels like. Desgin is
                how it work
              </p>
              <p style={{ float: "right" }}>- Steve Jobs</p>
            </div>
          </div>
          <div className="working-tends-container mb-2 mt-2">
            <div className="shadow-sm p-2 bg-white">
              <WiTime1 size={24} />
              <span>WEEK TRENDING</span>
            </div>
            <div className="trending-list">
              <div>
                Custom Title,Styles,Subtitle,Long Post Pagination and More
              </div>
              <div style={{ marginTop: "10  px" }}>
                <FaGreaterThan size={20} color="orangered" />
              </div>
            </div>
            <hr />
            <div className="trending-list">
              <div>
                Custom Title,Styles,Subtitle,Long Post Pagination and More
              </div>
              <div style={{ marginTop: "10  px" }}>
                <FaGreaterThan size={20} color="orangered" />
              </div>
            </div>
            <hr />
            <div className="trending-list">
              <div>
                Custom Title,Styles,Subtitle,Long Post Pagination and More
              </div>
              <div style={{ marginTop: "10  px" }}>
                <FaGreaterThan size={20} color="orangered" />
              </div>
            </div>
            <hr />
            <div className="trending-list">
              <div>
                Custom Title,Styles,Subtitle,Long Post Pagination and More
              </div>
              <div style={{ marginTop: "10  px" }}>
                <FaGreaterThan size={20} color="orangered" />
              </div>
            </div>
            <hr />
            <div className="trending-list">
              <div>
                Custom Title,Styles,Subtitle,Long Post Pagination and More
              </div>
              <div style={{ marginTop: "10  px" }}>
                <FaGreaterThan size={20} color="orangered" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section3;
