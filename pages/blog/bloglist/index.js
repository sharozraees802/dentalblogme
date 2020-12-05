import React from "react";
import BlogItem from "../../../components/blog/BlogItem";
import Bloglists from "../../../components/blog/bloglists";
import Footer from "../../../components/layout/Footer";
import Header from "../../../components/Header";
import UHeader from "../../../components/Uheader/Uheader";
import server from "../../../config/index";

export default function bloglist({ blogs }) {
  return (
    <div>
      <UHeader />
      <Header />
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-md-4 p-4">
            <h4 style={{ color: "#001f24" }}>News</h4>
            <BlogItem blog={blogs} category="Notícias" />
          </div>
          <div className="col-md-4 p-4">
            <h4 style={{ color: "#001f24" }}>Education</h4>
            <BlogItem blog={blogs} category="Educação" />
          </div>
          <div className="col-md-4 p-4">
            <h4 style={{ color: "#001f24" }}>Tecnology</h4>
            <BlogItem blog={blogs} category="Tecnologia" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <h5 style={{ color: "#001f24" }}>All News Posts </h5>
            <Bloglists blog={blogs} category="Notícias" />
          </div>
          <div className="col-md-4">
            <h5 style={{ color: "#001f24" }}>All Education Posts </h5>
            <Bloglists blog={blogs} category="Educação" />
          </div>
          <div className="col-md-4">
            <h5 style={{ color: "#001f24" }}>All Technology Posts </h5>
            <Bloglists blog={blogs} category="Tecnologia" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/getblog`);
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}
