import React from "react";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Footer from "../../components/layout/Footer";
import Header from "../../components/Header";
import UHeader from "../../components/Uheader/Uheader";
import server from "../../config/index";

const index = ({ blogs }) => {
  return (
    <div>
      <UHeader />
      <Header />
      <Section2 blog={blogs} />
      <Section3 blog={blogs} />
      <Footer />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${server}/getblog`);
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}
export default index;
