import React from 'react';
import { Table } from 'reactstrap';
import { GiMedicalPack } from 'react-icons/gi';
import { FaUserMd,FaAmbulance } from 'react-icons/fa';
import {AiFillMedicineBox,AiOutlineCheck} from 'react-icons/ai'
const Tablegrid = (props) => {
  return (

    <div className=" container-fluid mb-5" style={{ position: 'static', height: '300px', marginTop: '30px' }}>

      <div className="container mt-3" style={{ height: '100px' }}>

        <div className="row">
          <div className="col">
            <h4>Quick Support <br /><br /> </h4>
            <p className="text-left">Our goal is to solve the problem as fast and efficient as possible.</p>
            <button type="button" className="btn btn-success float-left mt-3"> <a href="/services">Check out</a></button>

          </div>

          <div className="col">
            <div style={{ display: "flex" }}>
              <div>
                <AiOutlineCheck size={28} />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <h4>Experience <br /><br /></h4>
                <p>We´ve more than 10 years of experience.</p>
              </div>
            </div>
            <div style={{ display: "flex",marginTop:'15px' }}>
              <div >
                <AiOutlineCheck size={28} />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <h4>Trust <br /><br /></h4>
                <p>Our services are displayed the fairer and more secure the possible.</p>
              </div>
            </div>
          </div>

          <div className="col">
            
          <div style={{ display: "flex" }}>
              <div>
                <AiOutlineCheck size={28} />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <h4>Credibility <br /><br /></h4>
                <p>Checkout our commentaries section on social media.</p>
              </div>
            </div>
            <div style={{ display: "flex" ,marginTop:'15px'}}>
              <div>
                <AiOutlineCheck size={28} />
              </div>
              <div style={{ marginLeft: '10px' }}>
                <h4>Commitment <br /><br /></h4>
                <p>We charge nothing if the case is not solved and we give all necessary attention support.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Tablegrid;