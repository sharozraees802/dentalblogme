import React, { useState } from 'react';
import Slider from "react-slick";
import { MdEditLocation } from 'react-icons/md'
const Classified3 = () => {

    const Image=[
        {id:1,img:'https://images.unsplash.com/photo-1533557188897-ef2bc7257ba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=803&q=80'},
        {id:2,img:'https://images.unsplash.com/photo-1584404268984-89c43e841646?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=808&q=80'},
        {id:3,img:'https://images.unsplash.com/photo-1593642703013-5a3b53c965f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80'},
        {id:4,img:'https://images.unsplash.com/photo-1488654715439-fbf461f0eb8d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80'},
        {id:5,img:'https://images.unsplash.com/photo-1593642703013-5a3b53c965f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80'},

    ]
    const settings = {
        dots: false,
        arrows:true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows:true,
    };
    const [image,setImage]=useState('https://images.unsplash.com/photo-1593642703013-5a3b53c965f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80')

    const [width, setWidth] = useState('100px');
    
    return (
        <div className="container-fluid bg-light">
            <div className="row mt-5 bg-light">
                <div className="col-md-6">
                    <div style={{ position: 'relative' }}>
                        <img width="100%" src={image} />
                        <div style={{
                            position: 'absolute',
                            right: '5%',
                            top: '5%',
                            maxWidth: width,
                        }}
                            
                        >
                            <img width="100%" src={Image[0].img} onClick={()=>setImage(Image[0].img)} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            right: '5%',
                            top: '20%',
                            maxWidth: width,
                        }}
                            
                        >
                            <img width="100%" src={Image[1].img} onClick={()=>setImage(Image[1].img)} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            right: '5%',
                            top: '40%',
                            maxWidth: width,
                        }}
                            
                        >
                            <img width="100%" src={Image[2].img} onClick={()=>setImage(Image[2].img)} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            right: '5%',
                            top: '60%',
                            maxWidth: width,
                        }}
                            
                        >
                            <img width="100%" src={Image[3].img} onClick={()=>setImage(Image[3].img)} />
                        </div>
                        <div style={{
                            position: 'absolute',
                            right: '5%',
                            top: '80%',
                            maxWidth: width,
                        }}
                            
                        >
                            <img width="100%" src={Image[4].img} onClick={()=>setImage(Image[4].img)} />
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '70px' }}>
                        <div>
                            <h1>OC200</h1>
                            <p><MdEditLocation color="green" />Interior De Paule</p>
                            <h3 style={{ color: 'green' }}>RS$ 65000</h3>
                        </div>
                        <div>
                            <button
                                style={{
                                    padding: '3px 20px',
                                    backgroundColor: '#34bbc9',
                                    color: 'white',
                                    border: '1px solid white',
                                    borderRadius: '4px'
                                }}
                            >Make An Offer</button><br />
                            <button
                                style={{
                                    padding: '3px 20px',
                                    marginTop: '25px',
                                    backgroundColor: '#34bbc9',
                                    color: 'white',
                                    border: '1px solid white',
                                    borderRadius: '4px'
                                }}
                            >Make An Offer</button>
                        </div>
                    </div>
                    <div style={{ marginLeft: '85px', marginTop: '20px' }}>
                        <p>Aprello Muito pouce uso</p>
                        <p style={{ color: 'grey' }}>Ano :
                        <span style={{ color: 'black' }}>2013
                        </span> Marca :
                        <span style={{ color: 'black' }}> INSTUMENTERIAM
                        </span>
                        </p>
                        <p style={{ color: 'grey' }}>Category
                        <span style={{ color: 'black' }}> INSTUMENTERIAM
                        </span>
                        </p>
                        <p style={{ color: 'grey' }}>Motiva da Venda :
                        <span style={{ color: 'black' }}>Capra de 3x1
                        </span> Exposis (aprox) :
                        <span style={{ color: 'black' }}> 0
                        </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="row mb-5 mt-5">
                <div className="col-md-8">
                    <form>
                        <div className="row">
                            <div className="col-md-4">
                                <input className="form-control" placeholder="Name" />
                            </div>
                            <div className="col-md-3">
                                <input className="form-control" placeholder="Phone" />
                            </div>
                            <div className="col-md-4">
                                <input className="form-control" placeholder="Email" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <textarea class="form-control mt-2" rows="3"></textarea>
                            </div>
                        </div>
                        <button
                            style={{
                                backgroundColor: 'green',
                                color: 'white',
                                padding: '9px 30px',
                                borderRadius: '3px',
                                border: '1px solid white',
                                marginTop: '10px'
                            }}
                        >Enter</button>
                    </form>
                </div>
            </div>
            <div className="row mb-5">
                <div className="col">
                    <div className="container">
                        <Slider {...settings}>
                            <div>
                                <Picturelabels />
                            </div>
                            <div>
                                <Picturelabels />
                            </div>
                            <div>
                                <Picturelabels />
                            </div>
                            <div>
                                <Picturelabels />
                            </div>
                            <div>
                                <Picturelabels />
                            </div>
                            <div>
                                <Picturelabels />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Classified3


const Picturelabels = () => {
    return (
        <div>
            <div style={{ maxWidth: '250px', margin: '0px 10px', position: 'relative' }}>
                <img width="100%" src="https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                <div style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    backgroundColor: 'black',
                    width: '80px',
                    height: '28px',
                    opacity: '50%',
                    borderRadius: '5px'
                }}>
                    <p style={{ color: 'white', textAlign: 'center' }}>For Sale</p>
                </div>
                <div style={{
                    position: 'absolute',
                    top: '70%',
                    left: '12%',
                }}>
                    <button
                        style={{
                            backgroundColor: 'blue',
                            color: 'white',
                            padding: '2px 10px',
                            borderRadius: '4px',
                            border: '1px solid grey'
                        }}
                    >Price Contact for sale</button>
                </div>
            </div>
        </div>
    )
}