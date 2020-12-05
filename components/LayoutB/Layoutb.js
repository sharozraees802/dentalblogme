import Header from "../Header";
import Uheader from "../Uheader/Uheader";
import Banner from "./Banner";
import Boxes from "./Boxes/Boxes";
import Tablegrid from "./Tablegrid";
import Trending from "./Trending";
import Testimonials from "./Testimonials";
import Contactform from "./Contactform";
import Footer from "../layout/Footer";

const LayoutB = ({ children }) => {
  return (
    <>
      <Uheader />
      <Header />
      <Banner />
      <Boxes />
      <Tablegrid />
      <Trending />
      <Testimonials />

      {children}
      <Footer />
    </>
  );
};

export default LayoutB;
