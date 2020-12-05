import React, { useState, useEffect } from "react";
import { FiMessageCircle, FiEdit } from "react-icons/fi";
import { WiTime1 } from "react-icons/wi";
import {
  AiTwotoneHome,
  AiFillFacebook,
  AiTwotoneShopping,
} from "react-icons/ai";
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";
import { FaCode, FaShoppingCart } from "react-icons/fa";
import Slider from "react-slick";
import axios from "axios";
import Link from "next/link";
const Section1 = ({ blog }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const uniq = [...new Set(blog)].filter((item) => item.category).slice(0, 10);
  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col">
          <div className="nav-container">
            <div className="brand-home-nav">
              <p>
                <a href="#">
                  <AiTwotoneHome size={15} color="white" />
                  Home
                </a>
              </p>
            </div>
            <div className="nav-links">
              <ul>
                <li>
                  <a href="#">
                    Demos
                    <IoMdArrowDropdown />
                  </a>
                  <div className="demos-drop-down">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          <p style={{ marginLeft: "40px" }}>Best Adaption</p>
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <p style={{ marginLeft: "40px" }}>Best Adaption</p>
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <p style={{ marginLeft: "40px" }}>Best Adaption</p>
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <p style={{ marginLeft: "40px" }}>Best Adaption</p>
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">
                    Drop Down
                    <IoMdArrowDropdown />
                  </a>
                  <div className="drop-down-nav">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li className="nested-drop-down">
                              <div className="nested-link-next-drop-down">
                                <div>
                                  <a href="#">Home</a>
                                </div>
                                <div
                                  style={{
                                    marginLeft: "15px",
                                    marginTop: "3px",
                                  }}
                                >
                                  <IoMdArrowDropright size={18} />
                                </div>
                              </div>
                              <div className="sub-manu">
                                <ul>
                                  <li>
                                    <a href="#">Home</a>
                                  </li>
                                  <li>
                                    <a href="#">Home</a>
                                  </li>
                                  <li>
                                    <a href="#">Home</a>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">
                    Mega Links
                    <IoMdArrowDropdown />
                  </a>
                  <div className="demos-drop-down">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          <p style={{ marginLeft: "40px" }}>Best Adaption</p>
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <p style={{ marginLeft: "40px" }}>Best Adaption</p>
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <p style={{ marginLeft: "40px" }}>Best Adaption</p>
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3">
                          <p style={{ marginLeft: "40px" }}>Best Adaption</p>
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Mega Label</a>
                  <div className="demos-drop-down">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="megalabel-img">
                            <img
                              width="100%"
                              src="https://images.unsplash.com/photo-1586207208775-fff3effef13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
                            />
                            <p>Earn $900,000 per year with magazine website</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="megalabel-img">
                            <img
                              width="100%"
                              src="https://images.unsplash.com/photo-1586207208775-fff3effef13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
                            />
                            <p>Earn $900,000 per year with magazine website</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="megalabel-img">
                            <img
                              width="100%"
                              src="https://images.unsplash.com/photo-1586207208775-fff3effef13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
                            />
                            <p>Earn $900,000 per year with magazine website</p>
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="megalabel-img">
                            <img
                              width="100%"
                              src="https://images.unsplash.com/photo-1586207208775-fff3effef13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
                            />
                            <p>Earn $900,000 per year with magazine website</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">
                    Complex Mega
                    <IoMdArrowDropdown />
                  </a>
                  <div className="demos-drop-down">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          <ul style={{ borderLeft: "0px" }}>
                            <li>Mega link</li>
                            <li>
                              Mega link
                              <ul style={{ borderLeft: "0px" }}>
                                <li>Mega link</li>
                                <li>Mega link</li>
                                <li>Mega link</li>
                              </ul>
                            </li>
                            <li>Mega link</li>
                          </ul>
                        </div>
                        <div className="col-md-9">
                          <div className="row">
                            <div className="col-md-3">
                              <div className="megalabel-img">
                                <img
                                  width="100%"
                                  src="https://images.unsplash.com/photo-1586207208775-fff3effef13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
                                />
                                <p>
                                  Earn $900,000 per year with magazine website
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="megalabel-img">
                                <img
                                  width="100%"
                                  src="https://images.unsplash.com/photo-1586207208775-fff3effef13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
                                />
                                <p>
                                  Earn $900,000 per year with magazine website
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="megalabel-img">
                                <img
                                  width="100%"
                                  src="https://images.unsplash.com/photo-1586207208775-fff3effef13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
                                />
                                <p>
                                  Earn $900,000 per year with magazine website
                                </p>
                              </div>
                            </div>
                            <div className="col-md-3">
                              <div className="megalabel-img">
                                <img
                                  width="100%"
                                  src="https://images.unsplash.com/photo-1586207208775-fff3effef13e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
                                />
                                <p>
                                  Earn $900,000 per year with magazine website
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <FaCode />
                    Shortcut
                    <IoMdArrowDropdown />
                  </a>
                  <div className="shortcut-down-nav">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-3">
                          <ul>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                            <li>
                              <a href="#">Home</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">
                    <FaShoppingCart />
                    Buy Now
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <Slider {...settings}>
            {uniq.map((item) => {
              return (
                <div key={item._id}>
                  <Link href="blog/result/[_id]" as={`blog/result/${item._id}`}>
                    <a>
                      <div className="card mt-5">
                        <img
                          className="card-img-top"
                          src={item.photo}
                          alt="Card image cap"
                        />
                        <div className="card-img-overlay mt-5 text-white">
                          <div className="main-carousel-img">
                            <div className="main-crousal-icons">
                              <FiMessageCircle size={20} color="orangered" />
                              <span className="mr-3">5</span>
                              <FiEdit size={20} color="orangered" />
                              <span className="mr-3">{item.postedBy}</span>
                              <WiTime1 size={20} color="orangered" />
                              <span>{item.createdAt}</span>
                            </div>
                            <h1 className="card-text">{item.title}</h1>
                            <button className="btn-readmore">READMORE</button>
                          </div>
                        </div>
                      </div>
                    </a>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="mb-2">
            <div className="card mt-5">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1536528679846-3c5a38e3026b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
                alt="Card image cap"
              />
              <div className="card-img-overlay text-white">
                <div className="facebook-links">
                  <img src="https://images.unsplash.com/photo-1505489435671-80a165c60816?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=831&q=80" />
                  <p>
                    Page Name <br /> 1111 Likes
                  </p>
                </div>
                <div className="facebook-link-bottom">
                  <button>
                    <AiFillFacebook size={14} color="blue" />
                    <a href="#">Like Page</a>
                  </button>
                  <button>
                    <AiTwotoneShopping size={14} color="black" />
                    <a href="#">Shop Now</a>
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-3 mt-4">
              <div className="card-header shadow-sm p-3 bg-white rounded">
                Email News Latter
              </div>
              <div className="card-body ">
                <form>
                  <label>
                    Subscribe to receive inspiration, ideas, and news in your
                    inbox
                  </label>
                  <div style={{ marginTop: "10px", marginLeft: "5px" }}>
                    <input
                      type="text"
                      className="newslatter-inp"
                      placeholder="Email Address"
                    />
                    <button className="btn-submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
