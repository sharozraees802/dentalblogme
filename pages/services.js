import React from 'react'
import { GrCloudlinux } from 'react-icons/gr'
import {AiOutlineBulb} from 'react-icons/ai'
import {MdLaptopChromebook} from 'react-icons/md'
import {RiBuilding2Line} from 'react-icons/ri'
import Layout from '../components/layout/Layout'

const Service = () => {
    return (
        <Layout>
        <div className="container-fluid">
        <div className="row mt-5 mb-5">
            <div className="col-12">
                <div
                    style={{
                        position: "relative",
                        color: 'white'
                    }}>
                    <img width="100%" src="../static/images/solutions/solutions.png" alt="Card image" />
                   
                </div>
            </div>
            <div className="col-12 mt-5 text-center">
                    <div style={{padding:'0px 25%'}}>
                        <h1 style={{fontSize:'40px',fontWeight:'bold',marginBottom:'20px'}}>COMPREHENSIVE SERVICE</h1>
                        <p>We put our efforts to customers solutions and requests delivering an answer at the fastest
                            span of time with exeptional quality.
                        We also provide guidance and search for units sales enabling you to make a deal with discreet and
                        value.</p>
                    </div>
            </div>
            <div className="col-12 mt-5">
                <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="ml-4">
                        <img width="70%" src="../static/images/solutions/support.png" alt="Card image" />
                        </div>
                        <div className="mr-3">
                            <h3 style={{marginTop: "40px"}}>Technical Support</h3>
                            <p>We provide remote service for 
                                dental units. Check it out.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                    <img width="70%" src="../static/images/solutions/sales.png" alt="Card image" />
                        </div>
                        <div className="mr-3">
                            <h3 style={{marginTop: "78px"}}>Sales</h3>
                            <p>Always searching for customers
                                to buy your dental office used product.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                    <img width="70%" src="../static/images/solutions/leadership.png" alt="Card image" />
                        </div>
                        <div className="mr-3">
                            <h3 style={{marginTop: "40px"}}> Guidance</h3>
                            <p>We provide advice on units sale and support.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                    <div className="ml-4">
                    <img width="70%" src="../static/images/solutions/news.png" alt="Card image" />
                        </div>
                        <div className="mr-3">
                            <h3 style={{marginTop: "40px"}}> News</h3>
                            <p>Take a look at our blog section to know the trending
                                world dental news.
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="col-12 mt-5">
                <div className="container bg-light">
                     <div className="row mt-3">
                        <div className="col m-3">
                            <h3>Our Practice Areas</h3> <br/>
                            <p>Take a consultation at one of our expertises below to find what
                                best suits for you.
                            </p>
                        </div>
                    </div>
                    <h3 className="text-center h2">Dental Imaging</h3> <br/>
                    <div className="row m-1">
                        <div className="col-md-3">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src="../static/images/solutions/classifieds.jpg" alt="classifieds" />
                            <p style={{marginTop:"10px"}}>Dental Office Used Items</p>
                        </div>
                        <div className="col-md-3">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src="../static/images/solutions/diagnostic.jpg" alt="diagnnostic" />
                            <p style={{marginTop:"10px"}}>CBCT Software Instructions (Ondemand3D)</p>
                        </div>
                        <div className="col-md-3">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src="../static/images/solutions/pan.jpg" alt="pan" />
                            <p style={{marginTop:"10px"}}>Dental 2D Imaging and Software <br/> Q & A</p>
                        </div>
                        <div className="col-md-3 ">
                            <img style={{minWidth:"250px", maxWidth: "250px", minHeight:"190px",  maxHeight:"190px"}} src="../static/images/solutions/repair.jpg" alt="repair" />
                            <p style={{marginTop:"10px"}}>Dental Units Repair</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-12 bg-dark">
                <div className="container text-white">
                    <div className="row">
                        <div className="col mt-5 mb-5 text-center">
                            <div className="mt-5">
                                <h1>WE'D LOVE TO HEAR FROM YOU</h1>
                                <a href="/contact">
                                <button
                                style={{padding:'10px 40px',
                                backgroundColor:'transparent',
                                border:"1px solid white",
                                color:'white',
                                borderRadius:'3px',
                                marginTop:'10px'
                            }}
                                >CONTACT US</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
    )
}
export default Service;