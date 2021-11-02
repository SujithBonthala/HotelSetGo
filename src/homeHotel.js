import logo from "./logo512.png";
import "./styleHome.css";

function Homehotel() {
  return (
    <div>
      <div className="navigation-bar">
        <nav className="navbar navbar-expand-lg">
          <div className="row">
            <div className="col-lg-10 col-sm-12">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Lodging
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.google.com">
                    Restaurant
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-12">
              <img className="img-fluid" src="" alt="hotel-logo" />
            </div>
          </div>
        </nav>
      </div>
      <div className="SectionLight">
        <div className="jumbotron heading-subheading">
          <h1 className="display-4">Hello, world!</h1>
          <p className="lead">Have a nice and wonderful expreriece....</p>
        </div>
        <div className="row">
          <div className="col"></div>
          <div className="col-sm-12 col-md-6">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="d-block w-100 bg-dark"
                    src={logo}
                    alt="First slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 bg-dark"
                    src={logo}
                    alt="Second slide"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    className="d-block w-100 bg-dark"
                    src={logo}
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
                  href="https://www.google.com"
                  className="fa fa-facebook-square fa-4x"
                ></a>
                <a
                  href="https://www.google.com"
                  className="fa fa-google-plus-square fa-4x"
                ></a>

                <a
                  href="https://www.google.com"
                  className="fa fa-instagram fa-4x"
                ></a>
              </div>
              <div className="col"></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Homehotel;
