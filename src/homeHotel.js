import logo from "./logo512.png";
import "./styleHome.css";
import hotellogo from './hotelLogo.jpg'
import img1 from './hotelhomeimg2.jpg'
import img2 from './hotelhomeimg1.jpg'
import img3 from './homehotelimg3.jpg'
import { useHistory } from "react-router-dom";

function Homehotel({setLoginUser,user}) {

  const history = useHistory();
  return (
    <div className="fullPage">
      <div className="navigation-bar">
        <nav className="navbar navbar-expand-lg">
          <div className="row">
            <div className="col-md-5 col-sm-12">
              <ul className="navbar-nav">
                <li className="nav-item">
                <button className="nav-link" onClick={()=>{history.push('/lodgingPage')}}>Lodging</button>
                </li>
                <li className="nav-item">
                <button className="nav-link" onClick={()=>{history.push('/hotelseat')}}>Restaurant</button>
                </li>
              </ul>
            </div>
            <div className="col-md-2 col-sm-12">
              <img className="img-fluid" src={hotellogo} alt="hotel-logo" />
            </div>
            <div className="col-md-3 col-sm-12 displayname">
              <h2>Welcome {user.name}!!</h2>
            </div>
            <div className="col-md-2 col-sm-12">
              <button id="b2" onClick={()=>{setLoginUser({})}}>Sign Out</button>
            </div>
          </div>
        </nav>
      </div>
      <div className="SectionLight">
        <div className="jumbotron heading-subheading">
          <h1 className="display-4">World Class Accomodation!!</h1>
          <p className="lead">Discover a hotel that defines a new dimension of luxury...</p>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-4">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 bg-dark"
                    src={img1}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 bg-dark"
                    src={img2}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 bg-dark"
                    src={img3}
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
      <div className="footerSection">
        <footer className="footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9 col-sm-12 social-wrapper">
                <a
                  href="https://www.facebook.com"
                  className="fa fa-facebook-square fa-4x"
                ></a>
                <a
                  href="https://www.gmail.com"
                  className="fa fa-google-plus-square fa-4x"
                ></a>

                <a
                  href="https://www.instagram.com"
                  className="fa fa-instagram fa-4x"
                ></a>
              </div>
              <div className="col-lg-3 col-sm-12 info">
                <div className="row">
                  <div className="col-md-12 contactinfo">Contact Info:</div>
                </div>
                <div className="row">
                  <div className="col-md-12 number">7259132778</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Homehotel;
