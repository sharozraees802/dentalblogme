import Link from "next/link";
import React from "react";
import { FiMessageCircle, FiEdit } from "react-icons/fi";
import { WiTime1 } from "react-icons/wi";
export default function BlogItem({ blog, category }) {
  const filter = blog.filter((item) => item.category === category).slice(0, 4);
  return (
    <>
      {filter.map((blogitem) => {
        let date = new Date(blogitem.createdAt);
        return (
          <Link
            href="result/[_id]"
            as={`result/${blogitem._id}`}
            key={blogitem._id}
          >
            <a>
              <div
                className="row bg-white p-1"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.2)" }}
              >
                <div className="col-md-4">
                  <img
                    width="180px"
                    height="180px"
                    src={blogitem.photo}
                    alt="blog"
                  />
                </div>
                <div className="col-md-8 pl-5">
                  <h5>{blogitem.title}</h5>
                  <div className="main-crousal-icons">
                    <FiEdit size={16} color="#001f24" />
                    <span style={{ fontSize: "13px" }} className="mr-3">
                      {blogitem.postedBy}
                    </span>
                    <WiTime1 size={16} color="#001f24" />
                    <span style={{ fontSize: "13px" }}>
                      {date.getDate() +
                        "-" +
                        (date.getMonth() - 1) +
                        "-" +
                        date.getFullYear()}
                    </span>
                  </div>
                  <p className="mt-1" style={{ fontSize: "13px" }}>
                    {blogitem.body.substring(0, 100)}. read more ...
                  </p>
                </div>
              </div>
            </a>
          </Link>
        );
      })}
    </>
  );
}
