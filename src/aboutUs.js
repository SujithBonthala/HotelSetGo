import "./Aboutus.css";
function Aboutus() {
  return (
    <div>
      <div className="bg-image"></div>

      <div className="bg-text">
        <h1>About Us</h1>
        <p className="content">
          We provide Lodging and Dining services. We essentially provide two
          services - <br/>1. Lodging - One can reserve rooms for the required dates
          from varying types of rooms. We provide rooms right from Single Bed
          Rooms to Luxury Suites.
          <br />
          2. Dining - Tables can be booked as per requirement, where they will
          be serve a predecided menu (changes daily). It will be a buffet.
          <br />
          Things that make us different -<br/>
          Hygeine and Luxury <br/>
          Ensuring Value for Money
        </p>
      </div>
      <div className="go-back">
        <a href="/" className="btn">
          Go Back
        </a>
      </div>
    </div>
  );
}

export default Aboutus;
