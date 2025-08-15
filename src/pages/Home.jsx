import { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);

  return (
    <main className="background-container px-4">
      <div className="container all-content px-4">
        <div className="row justify-content-center text-center home-container">
          <h1 className="home-title">
            Dahlia Coastal Living
            <span style={{ display: "block", marginTop: "-1vw" }}>
            <small>Imperial Beach</small>
            </span>
          </h1>
          <div className="px-2 py-1 mt-2 textbox">
            <hr className="hrTag mb-3 mt-1" />
            <h5 className="home-desc">
              Enjoy 2 bedroom 1 bath duplexes in a peaceful environment with the
              convenience of stores, schools, restaurants, and the beach within
              blocks!
            </h5>
            <hr className="hrTag mb-1 mt-3" />
          </div>
        </div>
        <div className="home-button-container">
          <Link to="/residence-property">
            <button type="button" className="btn btn-lg homeButton">
              Property Info
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Home;
