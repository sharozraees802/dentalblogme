import React, { useState, useEffect } from "react";
import { FiEdit } from "react-icons/fi";
import { BiMessageEdit } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
import { WiTime1 } from "react-icons/wi";
import UHeader from "../../../components/Uheader/Uheader";
import Footer from "../../../components/layout/Footer";
import Header from "../../../components/Header";
import Link from "next/link";
import server from "../../../config/index";

export default function bloglist({ blog }) {
  const [latestblog, setLatestBlog] = useState([]);
  useEffect(() => {
    async function Getdata() {
      const res = await fetch(`${server}/getblog`);
      const result = await res.json();
      await setLatestBlog(result);
    }
    Getdata();
  }, []);

  var regex = /(<([^>]+)>)/gi;
  const body = blog[0].body.replace(regex, " ");

  let date = new Date(blog[0].createdAt);
  return (
    <div>
      <UHeader />
      <Header />
      <div className="container">
        <div className="row bg-light">
          <div className="col-9">
            <div className="col-md-12">
              <div className="mt-4">
                <h1>{blog[0].title}</h1>
              </div>

              <div className="main-crousal-icons mb-4">
                <FiEdit size={15} /> &nbsp;
                <span className="mr-3">By: {blog[0].postedBy}</span>
                <WiTime1 size={15} />
                <span>
                  {" "}
                  {date.getMonth() +
                    1 +
                    "-" +
                    date.getDate() +
                    "-" +
                    date.getFullYear()}
                </span>
              </div>

              <img
                style={{
                  minWidth: "600px",
                  maxWidth: "600px",
                  minHeight: "600px",
                  maxHeight: "600px",
                }}
                src={blog[0].photo}
              />

              <div className="row mt-4 bg-light">
                <div className="col-md-12 mt-3 p3">
                  <p style={{ width: "600px" }}>{body.replace("&nbsp;", "")}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              width: "300px",
              left: "870px",
              top: "255px",
            }}
          >
            <div className="working-tends-container mb-2 mt-2">
              <div className="shadow-sm p-2 bg-white">
                <WiTime1 size={22} />
                <span> &nbsp; Week Trending</span>
              </div>
              {latestblog.slice(0, 7).map((bloglist) => {
                return (
                  <Link key={bloglist._id} href="[_id]" as={`${bloglist._id}`}>
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
      <Footer />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const { _id } = query;
  const res = await fetch(`${server}/getblog/${_id}`);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
}
