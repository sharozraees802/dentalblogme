import React from "react";
import { FiMessageCircle } from "react-icons/fi";
import { WiTime1 } from "react-icons/wi";
import {FiEdit} from "react-icons/fi"
import { FaGreaterThan } from "react-icons/fa";
import Slider from "react-slick";
import Link from "next/link";
const Section3 = ({ blog }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 8500,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };



  const digituniq = [...new Set(blog)]
    .filter((item) => item.category === "Educação")
    .slice(0, 8);
    
  return (
    <div className="container bg-light">
      <div className="row" style={{paddingTop: "15px"}}>
        <div style={{width:"1140px"}} >
          <div>
            <div className="business-heading mt-3 ml-3" style={{color: "#001f24"}}>
              <h5 style={{padding: "3px", borderRadius: "3px", display: "inline-block", backgroundSize:"auto", backgroundColor:"#001f24", color: "white"}}>Education</h5>
              <p>
                <Link href="blog/bloglist/">
                  <a className="mr-3">View All</a>
                </Link>
              </p>
            </div>
            <Slider {...settings}>
              {digituniq.map((item) => {
                const sliders = item.body.substring(0, 300);
                var regex = /(<([^>]+)>)/ig
                const slider = sliders.replace(regex, " ");
                const date = new Date(item.createdAt)
                return (
                  <div className="mt-3 ml-3" style={{minWidth:"1110px", maxWidth:"1110px", minHeight:"300px", maxHeight:"300px"}} key={item._id}>
                    <Link
                      href="blog/result/[_id]"
                      as={`/blog/result/${item._id}`}
                    >
                      <a>
                        <div className="card" style={{padding:"0", margin:"0", minWidth:"200px", maxWidth:"200px", minHeight:"250px", maxHeight:"250px"}}>
                          <img style={{minWidth:"200px", maxWidth:"200px", minHeight:"250px", maxHeight:"250px"}}
                            className="card-img-top"
                            src={item.photo}
                            alt="Card image cap"
                          />
                          <div className="card-img-overlay">
                            <h5 style={{padding: "3px", borderRadius: "3px", display: "inline-block", backgroundSize:"auto", backgroundColor:"rgba(0, 0, 0, 0.3)", marginTop:"80%", color:"white", backgroundSize:"auto", backgroundColor:"rgba(0, 0, 0, 0.3)"}}>
                              {item.title}
                            </h5>
                              <p className="card-text text-white">
                              <FiEdit size={10} />
                              <span style={{fontSize:'10px'}}> By: <u>{item.postedBy}</u> <br/> { (date.getMonth()+1) +"-" + date.getDate()  +"-"+ date.getFullYear()}
                              </span>
                            </p>
                           
                            
                          </div>
                          
                        </div>
                      </a>
                    </Link>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <div className="col-sm-12 col-md-4">
          
        </div>
      </div>
    </div>
  );
};
export default Section3;
