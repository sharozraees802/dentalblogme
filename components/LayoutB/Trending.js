import React, { Component } from "react";
import Slider from "react-slick";
import ReactPlayer from "react-player";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import axios from "axios";
import { FaPlusCircle } from "react-icons/fa";
import { WiTime1 } from "react-icons/wi";
import { FiEdit } from "react-icons/fi";
import server from "../../config/index";

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

export default class CustomArrows extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get(`${server}/getblog`)
      .then((res) => {
        const { data } = res;
        this.setState({ data });
      })
      .catch((err) => {
        console.log("Section 2 error");
      });
  }

  render() {
    const uniq = [...new Set(this.state.data)];
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div
        className="container-fluid mt-5"
        style={{
          height: "550px",
          border: "none",
          textAlign: "center",
        }}
      >
        <h2>Latest Blog Posts</h2>
        <Slider
          {...settings}
          style={{
            border: "none",
            padding: "50px 0 0 5px",
            width: "87%",
            height: "450px",
            margin: "auto",
          }}
        >
          {uniq.map((item) => {
            const date = new Date(item.createdAt);
            return (
              <Link href="blog/result/[_id]" as={`blog/result/${item._id}`}>
                <a>
                  <div
                    style={{ padding: "0 15px 0 5px", position: "relative" }}
                  >
                    <img
                      width="277px"
                      height="169"
                      src={item.photo}
                      style={{ padding: "0 10px 10px 5px" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "70px",
                        left: "25px",
                      }}
                    >
                      <p style={{ color: "white", fontSize: "10px" }}>
                        <FiEdit />
                        <span>{item.postedBy}</span>
                        <WiTime1 style={{ marginLeft: "20px" }} />
                        {date.getMonth() -
                          1 +
                          "-" +
                          date.getDate() +
                          "-" +
                          date.getFullYear()}
                      </p>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "90px",
                        left: "25px",
                      }}
                    >
                      <p style={{ color: "white", fontSize: "20px" }}>
                        {item.title.length > 20
                          ? item.title.substring(0, 20) + " ..."
                          : item.title.substring(0, 20)}{" "}
                      </p>
                    </div>
                    <div
                      style={{
                        position: "absolute",
                        top: "120px",
                        left: "25px",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <p>
                          <FaPlusCircle size="12" color="#ffb75e" />
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            paddingLeft: "10px",
                            color: "#ffb75e",
                          }}
                        >
                          More info
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </Slider>
      </div>
    );
  }
}
