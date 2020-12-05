import React from 'react';
import { SocialMediaIconsReact } from 'social-media-icons-react';

const Footer = () => {

  return (
    <div className="container mt-5">
      <div className="row shadow p-3 bg-white rounded">
        <div className="col-sm-12 col-md-4">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ margin: '20px' }}>
              <h1>MAGONE</h1>
              <p>&copy; MagOne <br /> All rights reserve</p>
            </div>
            <div className="vertical-line"></div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3">
          <div style={{ margin: '20px' }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p><a>About</a></p>
              <p><a>Contact</a></p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p><a>Forum</a></p>
              <p><a>Policy</a></p>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p><a>FAQ</a></p>
              <p><a>Shop</a></p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
          <div style={{ display: "flex" }}>
            <div className="vertical-line"></div>
            <div style={{ margin: '20px' }}>
              <ul className="social-links">
                <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="twitter" iconColor="rgba(69,64,64,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" /></li>
                <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="facebook" iconColor="rgba(69,64,64,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" /></li>
                <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="youtube" iconColor="rgba(69,64,64,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" /></li>
                <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="googleplus" iconColor="rgba(69,64,64,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" /></li>
                <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="linkedin" iconColor="rgba(69,64,64,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" /></li>
                <li><SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" borderWidth="0" borderStyle="solid" icon="tumblr" iconColor="rgba(69,64,64,1)" backgroundColor="rgba(255,255,255,1)" iconSize="5" roundness="50%" url="https://some-website.com/my-social-media-url" size="34" /></li>
              </ul>
              <hr />
              <form style={{display:"flex"}}>
                <div>
                  <label>Subscribe <br /> Newslatter</label>
                  
                  </div>
                  <div style={{marginTop:'10px',marginLeft:'5px'}}>
                    <input type="text" className="newslatter-inp" placeholder="Email Address" />
                  <button className="btn-submit">Submit</button>
                  </div> 
                  
                
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <footer >
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </footer> */}
    </div>
  )
}

export default Footer;