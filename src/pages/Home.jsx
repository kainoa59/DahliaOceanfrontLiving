import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../components/Footer'; // Import the footer component


const Home = () => {
    useEffect(() => {
        // Add a specific class to the body for this page
        document.body.classList.add('home-page');

        // Cleanup: Remove the class when the component unmounts
        return () => {
            document.body.classList.remove('home-page');
        };
    }, []);

    return (
        <div className="container-fluid d-flex align-items-center justify-content-center background-container">
            <div className="container">
                <div className="row justify-content-center text-center home-container">
                    <h1 className='home-title'>Dahlia Coastal Living <br /> <small>Imperial Beach</small></h1>
                    <div className="col-md-10 col-12 textbox">
                        <hr className='hrTag' />
                        <h5 className='homeDesc'>
                            Enjoy 2 bedroom 1 bath duplexes in a peaceful environment with the convenience of stores, schools, restaurants, and the beach within blocks!
                        </h5>
                        <hr className='hrTag' />
                    </div>
                </div>
                <div className="container-fluid text-center pb-4">
                    <Link to="/residence-property">
                        <button type="button" className="btn homeButton w-50">More Info</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;