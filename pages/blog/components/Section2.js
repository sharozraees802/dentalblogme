import { FiEdit } from "react-icons/fi";
import { WiTime1 } from "react-icons/wi";
import React from "react";
import SocialLogo from "social-logos";
import ReactDOM from "react-dom";
import { SocialMediaIconsReact } from "social-media-icons-react";
import Link from "next/link";
import { FaGreaterThan } from "react-icons/fa";
const Section2 = ({ blog }) => {
  const weekBlog = [...new Set(blog)].slice(0, 8);

  const blogMain = [...new Set(blog)]
    .filter((item) => item.category === "Notícias")
    .slice(0, 1);

  const technogiaBlog = [...new Set(blog)]
    .filter((item) => item.category === "Tecnologia")
    .slice(0, 1);
  const technogiaBlogList = [...new Set(blog)]
    .filter((item) => item.category === "Tecnologia")
    .slice(1, 5);

  const blogList = [...new Set(blog)]
    .filter((item) => item.category === "Notícias")
    .slice(1, 3);

  if (blogMain.length === -1) {
    console.log("somethingwrong");
  }

  //let date = new Date(blogMain[0].createdAt);
  let date = new Date();
  // const blogMain1 = blogMain[0].body.substring(0, 300);
  // var regex = /(<([^>]+)>)/gi;
  // const body1 = blogMain1.replace(regex, " ");

  // const blogMain2 = technogiaBlog[0].body.substring(0, 100);
  // var regex = /(<([^>]+)>)/gi;
  // const body2 = blogMain2.replace(regex, " ");

  const clickHandle = () => {
    document.location.href = "https://facebook.com/dental04";
  };

  return (
    <div className="container bg-light">
      <div className="row">
        <div className="col-sm-12 col-md-8">
          <div className="business-heading" style={{ marginTop: "30px" }}>
            <h5
              style={{
                padding: "3px",
                borderRadius: "3px",
                display: "inline-block",
                backgroundSize: "auto",
                backgroundColor: "#001f24",
                color: "white",
              }}
            >
              News
            </h5>
            <p>
              <Link href="blog/bloglist/">
                <a>View All</a>
              </Link>
            </p>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-7">
              <div
                className="card"
                style={{
                  minWidth: "440px",
                  maxWidth: "440px",
                  minHeight: "370px",
                  maxHeight: "370px",
                }}
              >
                {blogMain.map((item) => {
                  return (
                    <>
                      <img
                        style={{
                          minWidth: "440px",
                          maxWidth: "440px",
                          minHeight: "370px",
                          maxHeight: "370px",
                        }}
                        className="card-img-top"
                        src={item.photo}
                      />

                      <Link
                        href="blog/result/[_id]"
                        as={`blog/result/${item._id}`}
                      >
                        <a>
                          <div className="card-img-overlay text-white">
                            <h5
                              className="card-title"
                              style={{
                                padding: "3px",
                                borderRadius: "3px",
                                display: "inline-block",
                                backgroundSize: "auto",
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                marginTop: "65%",
                              }}
                            >
                              {item.title} <br />
                            </h5>{" "}
                            <br />
                            <FiEdit size={10} />
                            <span style={{ fontSize: "12px" }}>
                              {" "}
                              By : {item.postedBy}
                            </span>
                            <WiTime1 style={{ marginLeft: "20px" }} />
                            <span style={{ fontSize: "12px" }}>
                              {date.getMonth() +
                                1 +
                                "-" +
                                date.getDate() +
                                "-" +
                                date.getFullYear()}
                            </span>
                          </div>
                        </a>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-4">
              {blogList.map((item) => {
                const date = new Date(item.createdAt);
                return (
                  <Link
                    href="blog/result/[_id]"
                    key={item._id}
                    as={`blog/result/${item._id}`}
                  >
                    <a>
                      <div
                        key={item._id}
                        className="card"
                        style={{
                          left: "5px",
                          minWidth: "300px",
                          maxWidth: "300px",
                          minHeight: "185px",
                          maxHeight: "185px",
                        }}
                      >
                        <img
                          style={{
                            minWidth: "300px",
                            maxWidth: "300px",
                            minHeight: "185px",
                            maxHeight: "187px",
                          }}
                          className="card-img-top"
                          src={item.photo}
                          alt="Card image cap"
                        />
                        <div
                          className="card-img-overlay"
                          style={{ color: "white", marginTop: "30%" }}
                        >
                          <h5
                            style={{
                              padding: "3px",
                              borderRadius: "3px",
                              display: "inline-block",
                              backgroundSize: "auto",
                              backgroundColor: "rgba(0, 0, 0, 0.3)",
                            }}
                          >
                            {item.title.substring(0, 20)}
                          </h5>
                          <br />
                          <FiEdit size={10} />
                          <span style={{ fontSize: "12px" }}>
                            {" "}
                            By : {item.postedBy}
                          </span>
                          <WiTime1 style={{ marginLeft: "20px" }} />
                          <span style={{ fontSize: "12px" }}>
                            {date.getMonth() +
                              1 +
                              "-" +
                              date.getDate() +
                              "-" +
                              date.getFullYear()}
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="business-heading mt-5">
            <h5
              style={{
                padding: "3px",
                borderRadius: "3px",
                display: "inline-block",
                backgroundSize: "auto",
                backgroundColor: "#001f24",
                color: "white",
              }}
            >
              Technology
            </h5>
            <p>
              <Link href="blog/bloglist/">
                <a>View All</a>
              </Link>
            </p>
          </div>
          <div className="row">
            <div className="col-md-6 mt-1">
              <div className="card">
                {technogiaBlog.map((item) => {
                  return (
                    <>
                      <Link
                        href="blog/result/[_id]"
                        as={`blog/result/${item._id}`}
                      >
                        <a>
                          {
                            <img
                              style={{
                                minWidth: "320px",
                                maxWidth: "350px",
                                minHeight: "300px",
                                maxHeight: "300px",
                              }}
                              className="card-img-top"
                              src={item.photo}
                              alt="Card image cap"
                            />
                          }

                          <div className="card-body">
                            <h5
                              style={{
                                padding: "3px",
                                borderRadius: "3px",
                                display: "inline-block",
                                backgroundSize: "auto",
                                backgroundColor: "rgba(0, 0, 0, 0.3)",
                                margin: "0 0 3px 0",
                              }}
                            >
                              {item.title}
                            </h5>
                            <div style={{ margin: "0 0 3px 0", width: "60%" }}>
                              <FiEdit size={12} />
                              <span style={{ fontSize: "12px" }}>
                                {item.postedBy}
                              </span>
                              <WiTime1
                                size={12}
                                style={{ marginLeft: "20px" }}
                              />
                              <span style={{ fontSize: "12px" }}>
                                {date.getMonth() +
                                  1 +
                                  "-" +
                                  date.getDate() +
                                  "-" +
                                  date.getFullYear()}
                              </span>
                            </div>
                            <p className="card-text font-news">
                              {/* {body2.replace("&nbsp;", " ")} */}

                              <span>... Read more</span>
                            </p>
                          </div>
                        </a>
                      </Link>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="col-md-4">
              {technogiaBlogList.map((item) => {
                return (
                  <Link
                    key={item._id}
                    href="blog/result/[_id]"
                    as={`blog/result/${item._id}`}
                  >
                    <a>
                      <div
                        key={item._id}
                        className="card mb-2"
                        style={{
                          minWidth: "365px",
                          maxWidth: "365px",
                          minHeight: "100px",
                          maxHeight: "100px",
                        }}
                      >
                        {/* <img
                          style={{
                            minWidth: "130px",
                            maxWidth: "130px",
                            minHeight: "100px",
                            maxHeight: "100px",
                          }}
                          className="card-img-top"
                          src={item.photo}
                          alt="Card image cap"
                        /> */}
                        <div
                          key={item._id}
                          className="business-news"
                          style={{
                            background: "none",
                            position: "absolute",
                            margin: "0 0 20px 150px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          <p>
                            <span
                              className="business-news-heading"
                              style={{ color: "#001f24" }}
                            >
                              {item.title.substring(0, 30)} ...
                            </span>
                            <br />
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.body.substring(0, 30),
                              }}
                            />{" "}
                            ...{" "}
                          </p>
                        </div>
                      </div>
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          <div className="working-tends-container mb-2 mt-2">
            <div className="trending-list ">
              <div>
                {/* <SocialMediaIconsReact
                  borderColor="rgba(0,0,0,0.25)"
                  borderWidth="0"
                  borderStyle="solid"
                  icon="facebook"
                  iconColor="rgba(59,89,152,1)"
                  backgroundColor="rgba(255,255,255,1)"
                  iconSize="5"
                  roundness="50%"
                  size="34"
                /> */}
                <SocialLogo icon="facebook" size={34} onClick={clickHandle} />
                <button
                  onClick={clickHandle}
                  style={{ background: "white", border: "0px" }}
                >
                  facebook
                </button>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "100%" }}>
            <img
              style={{ width: "347px", height: "200px" }}
              className="card-img-top"
              src="https://images.unsplash.com/photo-1530319067432-f2a729c03db5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=980&q=80"
              alt="Card image cap"
            />
            <div className="card-img-overlay text-white">
              <div className="main-quote">
                <h5 className="card-title">Today´s Quote</h5>
              </div>
              <p className="quote-text" className="card-text">
                Desgin is not just what it look like and feels like. Desgin is
                how it work
              </p>
              <p style={{ float: "right" }}>- Steve Jobs</p>
            </div>
          </div>

          <div className="working-tends-container mb-2 mt-2">
            <div className="shadow-sm p-2 bg-white">
              <WiTime1 size={22} />
              <span> &emsp; Week Trending </span>
            </div>
            {weekBlog.map((bloglist) => {
              return (
                <Link
                  key={bloglist._id}
                  href="blog/result/[_id]"
                  as={`blog/result/${bloglist._id}`}
                >
                  <a>
                    <div
                      className="trending-list"
                      style={{
                        marginTop: "10px",
                        padding: "10px",
                        borderBottom: "1px solid grey",
                      }}
                    >
                      <div>{bloglist.title}</div>
                      <div style={{ marginTop: "10  px" }}>
                        <FaGreaterThan size={20} color="#001f24" />
                      </div>
                    </div>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section2;
