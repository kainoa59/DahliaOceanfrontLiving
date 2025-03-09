import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ResidenceProperty.css'; // Import the custom styles for the ResidenceProperty page
import Footer from '../components/Footer';

const ResidenceProperty = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <main>
            <div className="container-fluid background pt-4 px-6" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className="content-container px-3 pb-4">
                    <div className="container text-center">
                        <h1 className="home-title py-3 m-0">Residence & Property</h1>
                        <div className='hr-tag'>
                            <hr style={{ width: '60%' }}></hr>
                        </div>
                        <h4 className='header'>
                            Experience Imperial Beach&apos;s Best
                        </h4>
                        <div className="row experience mb-4">
                            <h6>
                                Enjoy a peaceful environment with the convenience of stores, schools, restaurants, and the beach within blocks!
                                Take a walk to the sand, relax with the sunset, and enjoy neighborhood events year-round. We&apos;re a small community
                                of 16 units close to shopping, entertainment, and services. All with easy access to public transportation and military bases.
                                Come enjoy the activities, natural attractions, and interests that Dahlia Coastal Living at Imperial Beach has to offer:
                            </h6>
                            <div className='hr-tag'>
                                <hr style={{ width: '100%' }}></hr>
                            </div>
                            <div className={`col-12 col-md-6 text-start ${isMobile ? 'mb-4' : ''}`}>
                                <img src="/Compressed_Images/IMG_8124.jpg" alt="Beach" className="img-fluid" />
                            </div>
                            <div className="col-12 col-md-6 d-flex align-items-center text-start">
                                <ul>
                                    <li className="list-element">Nearby Shopping</li>
                                    <li className="list-element">Schools within the neighborhood</li>
                                    <li className="list-element">Public transportation within blocks</li>
                                    <li className="list-element">Entertainment on Palm Avenue</li>
                                    <li className="list-element">Walking distance to dining, beaches, and bays</li>
                                    <li className="list-element">Easy access to freeways</li>
                                </ul>
                            </div>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '100%' }}></hr>
                        </div>
                        <div className='row header basic-info'>
                            <h4>Property Info</h4>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '60%' }}></hr>
                        </div>
                        <div className='row basic-info-list mb-4'>
                            <div className='col-12 col-md-6'>
                                <h6 className='basic-info-desc'>Every unit at Dahlia Coastal Living meets your highest expectation for an active, smoke-free lifestyle. Our duplexes provide that rare, relaxing San Diego lifestyle environment amidst a highly convenient location to optimize your busy life.
                                    There are numerous opportunities and options to check out including the beach itself! Each unit is situated around a newly landscaped front yard and each has been renovated.
                                </h6>
                            </div>
                            <div className='col-12 col-md-6'>
                                <img src="/Compressed_Images/IMG_2664_Original.jpeg" alt="Property" className="img-fluid" />
                            </div>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '100%' }}></hr>
                        </div>
                        <div className='row header resident-features'>
                            <h4>Resident features</h4>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '60%' }}></hr>
                        </div>
                        <div className='row resident-features-list mb-4'>
                            <div className='col-12 col-md-6'>
                                <ul>
                                    <li className="list-element">Fenced in back yards and full front yards</li>
                                    <li className="list-element">One car single car garage with drive-way parking</li>
                                    <li className="list-element">Frost-free refrigerator</li>
                                    <li className="list-element">Microwave with light & fan unit</li>
                                    <li className="list-element">Gas range/oven</li>
                                    <li className="list-element">Vertical blinds</li>
                                    <li className="list-element">Beautiful walk-in tiled showers, glass shower doors, and new vanities</li>
                                </ul>
                            </div>
                            <div className='col-12 col-md-6'>
                                <ul>
                                    <li className="list-element">Convenient laundry hook-up</li>
                                    <li className="list-element">Brand new kitchens with shaker-style cabinetry and new counters</li>
                                    <li className="list-element">New stainless steel appliances</li>
                                    <li className="list-element">Mirrored wardrobe doors</li>
                                    <li className="list-element">Beautiful wood vinyl flooring throughout the unit</li>
                                    <li className="list-element">Designer accented wall color in living room</li>
                                </ul>
                            </div>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '100%' }}></hr>
                        </div>
                        <div className='row header policy-info'>
                            <h4>Policy info</h4>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '60%' }}></hr>
                        </div>
                        <div className='row policy-info-list mb-4 px-4'>
                            <ul>
                                <li className="list-element">Western properties imperial beach is a smoke-free environment</li>
                                <li className="list-element">Tenant is responsible for water, gas and electricity (& cable if desired)</li>
                                <li className="list-element">Edco trash service is included</li>
                                <li className="list-element">Front yards are maintained with landscape service</li>
                                <li className="list-element">Pets policy: allowed with additional $400 deposit per pet, and an additional $50 per month rent per pet (up to two pets; only indoor cats)</li>
                            </ul>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '100%' }}></hr>
                        </div>
                        <div className='row header application-policy'>
                            <h4>Application Policy:</h4>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '60%' }}></hr>
                        </div>
                        <div className='row application-policy-list px-4'>
                            <ul>
                                <li className="list-element">An application is needed for each occupant over the age of 18</li>
                                <li className="list-element">Income must be verified</li>
                                <li className="list-element">Good credit and no adverse rental history required
                                </li>
                                <li className="list-element">Each application fee is $25 (background & credit check included)
                                </li>
                                <li className="list-element">Security deposit is $2,000
                                </li>
                                <li className="list-element">Western properties imperial beach does business in accordance with the federal fair housing act</li>
                            </ul>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '100%' }}></hr>
                        </div>
                        <div className='row header move-in'>
                            <h4>Ready To Move In?</h4>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '60%' }}></hr>
                        </div>
                        <div className='row move-in-list'>
                            <h3>Email: DMCCLOSKEY1@COX.NET</h3>
                            <h3>Phone: 1-(619)-424-6391</h3>
                        </div>
                        <div className='hr-tag'>
                            <hr style={{ width: '60%' }}></hr>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default ResidenceProperty;