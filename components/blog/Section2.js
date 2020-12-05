import React, { useState, useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { WiTime1 } from "react-icons/wi";
import { SocialMediaIconsReact } from "social-media-icons-react";
import axios from "axios";
import server from "../../config/index";

const Section2 = () => {
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
    .filter((item) => item.category === "Panorâmicos")
    .slice(0, 4);
  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className="business-heading">
            <h5>Panorâmicos</h5>
            <p>VIEW ALL</p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-8 mt-1">
              <div class="card">
                {loading ? (
                  <div>Loading....</div>
                ) : (
                  <img class="card-img-top" src={uniq[0].photo} />
                )}
                <div class="card-img-overlay mt-5 text-white">
                  {loading ? (
                    <div>title</div>
                  ) : (
                    <h5 class="card-title bg-orange mt-5">{uniq[0].title}</h5>
                  )}
                  <p class="card-text">
                    How do you land that job after collage?
                    <br />
                    <span>by Tiem Neguyn</span>
                  </p>
                </div>
                <div class="card-body bg-orangered text-white">
                  {loading ? (
                    <div>...</div>
                  ) : (
                    <p class="card-text font-news">
                      {uniq[0].body}{" "}
                      <span className="heading-business-news text-white">
                        readmore
                      </span>
                    </p>
                  )}
                  <div>
                    <FiMessageCircle color="white" />
                    <span className="business-news-heading text-white">5</span>
                    <WiTime1 style={{ marginLeft: "20px" }} color="white" />
                    <span className="business-news-heading text-white">
                      Jun 07,2015
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div class="card mb-3">
                {loading ? (
                  <div>image</div>
                ) : (
                  <img
                    class="card-img-top"
                    src={uniq[1].photo}
                    alt="Card image cap"
                  />
                )}
                {loading ? (
                  <div>loading...</div>
                ) : (
                  <div class="card-img-overlay">
                    <h5 class="card-title bg-color-img-overlay stuff-pick-img-overlay-font">
                      {uniq[1].title}
                    </h5>
                    <p class="card-text stuff-pick-img-overlay-font">
                      {uniq[1].body}
                      <br />
                      <span>by Tiem Neguyn</span>
                    </p>
                  </div>
                )}
              </div>
              <div class="card mb-3">
                {loading ? (
                  <div>image</div>
                ) : (
                  <img
                    class="card-img-top"
                    src={uniq[2].photo}
                    alt="Card image cap"
                  />
                )}
                {loading ? (
                  <div>loading...</div>
                ) : (
                  <div class="card-img-overlay">
                    <h5 class="card-title bg-color-img-overlay stuff-pick-img-overlay-font">
                      {uniq[2].title}
                    </h5>
                    <p class="card-text stuff-pick-img-overlay-font">
                      {uniq[2].body}
                      <br />
                      <span>by Tiem Neguyn</span>
                    </p>
                  </div>
                )}
              </div>
              <div class="card">
                {loading ? (
                  <div>image</div>
                ) : (
                  <img
                    class="card-img-top"
                    src={uniq[3].photo}
                    alt="Card image cap"
                  />
                )}
                {loading ? (
                  <div>loading...</div>
                ) : (
                  <div class="card-img-overlay">
                    <h5 class="card-title bg-color-img-overlay stuff-pick-img-overlay-font">
                      {uniq[3].title}
                    </h5>
                    <p class="card-text stuff-pick-img-overlay-font">
                      {uniq[3].body}
                      <br />
                      <span>by Tiem Neguyn</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="working-tends-container mb-2 mt-2">
            <div className="shadow-sm p-2 bg-white">
              <span>100+ Social Counters</span>
            </div>
            <div className="trending-list mt-3">
              <div>
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="twitter"
                  iconColor="rgba(29,161,242,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="50%"
                  url="https://some-website.com/my-social-media-url"
                  size="34"
                />
                <span>
                  266 <i style={{ color: "gray" }}>Follewers</i>
                </span>
              </div>
              <div className="twitter-background-color">
                <p className="follow-font">Follow</p>
              </div>
            </div>
            <hr />
            <div className="trending-list ">
              <div>
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="facebook"
                  iconColor="rgba(59,89,152,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="50%"
                  url="https://some-website.com/my-social-media-url"
                  size="34"
                />
                <span>
                  266 <i style={{ color: "gray" }}>Likes</i>
                </span>
              </div>
              <div className="facebook-background-color">
                <p className="follow-font">Like</p>
              </div>
            </div>
            <hr />
            <div className="trending-list ">
              <div>
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="googleplus"
                  iconColor="rgba(219,74,57,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="50%"
                  url="https://some-website.com/my-social-media-url"
                  size="34"
                />
                <span>
                  266 <i style={{ color: "gray" }}>Follewers</i>
                </span>
              </div>
              <div className="googleplus-background-color">
                <p className="follow-font">Follow</p>
              </div>
            </div>
            <hr />
            <div className="trending-list ">
              <div>
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="pinterest"
                  iconColor="rgba(230,0,35,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="50%"
                  url="https://some-website.com/my-social-media-url"
                  size="34"
                />
                <span>
                  266 <i style={{ color: "gray" }}>Follewers</i>
                </span>
              </div>
              <div className="pinterest-background-color">
                <p className="follow-font">Follow</p>
              </div>
            </div>
            <hr />
            <div className="trending-list ">
              <div>
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="linkedin"
                  iconColor="rgba(14,118,168,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="50%"
                  url="https://some-website.com/my-social-media-url"
                  size="34"
                />
                <span>
                  266 <i style={{ color: "gray" }}>Connections</i>
                </span>
              </div>
              <div className="linkedin-background-color">
                <p className="follow-font">Connect</p>
              </div>
            </div>
            <hr />
            <div className="trending-list ">
              <div>
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="behance"
                  iconColor="rgba(5,62,255,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="50%"
                  url="https://some-website.com/my-social-media-url"
                  size="34"
                />
                <span>
                  266 <i style={{ color: "gray" }}>Follewers</i>
                </span>
              </div>
              <div className="behance-background-color">
                <p className="follow-font">Follow</p>
              </div>
            </div>
            <hr />
            <div className="trending-list">
              <div>
                <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="rss"
                  iconColor="rgba(238,128,47,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="50%"
                  url="https://some-website.com/my-social-media-url"
                  size="34"
                />
                <span>
                  266 <i style={{ color: "gray" }}>Readers</i>
                </span>
              </div>
              <div className="rss-background-color">
                <p className="follow-font">Follow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
