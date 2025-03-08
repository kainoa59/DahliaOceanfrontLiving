import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Availability.css';
import Footer from '../components/Footer';

const Availability = () => {
    const listings = [
        { number: 1895, unit1: { number: 304, availability: false }, unit2: { number: 306, availability: false } },
        { number: 1896, unit1: { number: 312, availability: false }, unit2: { number: 314, availability: true } },
        { number: 1897, unit1: { number: 318, availability: false }, unit2: { number: 320, availability: false } },
        { number: 1898, unit1: { number: 324, availability: false }, unit2: { number: 326, availability: false } },
        { number: 1899, unit1: { number: 330, availability: false }, unit2: { number: 332, availability: true } },
        { number: 1900, unit1: { number: 338, availability: false }, unit2: { number: 340, availability: false } },
        { number: 1901, unit1: { number: 346, availability: false }, unit2: { number: 348, availability: false } },
        { number: 1902, unit1: { number: 354, availability: false }, unit2: { number: 356, availability: false } },
    ];

    // Define number of columns per row
    const columnsPerRow = 2; // Set to 2 so each row has two cards unless it's the last one

    return (
        <main className='main'>
            <div className="container-fluid background pt-4 px-6" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className="content-container px-3">
                    <div className="row">
                        <h1 className="home-title py-3 m-0">Availability</h1>
                    </div>
                    <div className='hr-tag'>
                        <hr style={{ width: '60%' }}></hr>
                    </div>
                    <div className="container-fluid pb-3" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
                        {/* Generate rows dynamically */}
                        {Array.from({ length: Math.ceil(listings.length / columnsPerRow) }, (_, rowIndex) => {
                            const rowListings = listings.slice(rowIndex * columnsPerRow, (rowIndex + 1) * columnsPerRow);
                            const isLastRow = rowIndex === Math.floor(listings.length / columnsPerRow);

                            return (
                                <div key={rowIndex} className="row main-row">
                                    {/* Render the actual cards */}
                                    {rowListings.map(({ number, unit1, unit2 }) => (
                                        <AvailabilityRow
                                            key={number}
                                            imageSrc={`/DahliaOceanfrontLiving/Compressed_Images/IMG_${number}.jpeg`}
                                            unit1={unit1}
                                            unit2={unit2}
                                        />
                                    ))}

                                    {/* If it's the last row and has only one item (7th card in 2-column layout), ensure it's centered */}
                                    {isLastRow && rowListings.length === 1 && (
                                        <div className="col-md-6 col-12 my-3 offset-md-3"></div>
                                    )}
                                </div>
                            );
                        })}
                        <div className='hr-tag'>
                            <hr style={{ width: '60%' }}></hr>
                        </div>
                        {/* Extra row with one card */}
                        <div className="row justify-content-center mt-3" style={{ marginBottom: '-15%' }}>
                            <div className="col-12 mb-4">
                                <div className="card rounded-0 last-card">
                                    <div className="image-container">
                                        <img
                                            src="/DahliaOceanfrontLiving/Compressed_Images/IMG_1935.jpeg"
                                            className="card-img-top rounded-0"
                                            alt="Featured"
                                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                                        />
                                    </div>
                                    <div className='hr-tag mt-4 mb-0'>
                                        <hr style={{ width: '80%' }}></hr>
                                    </div>
                                    <div className="card-body" style={{ justifyContent: 'space-evenly' }}>
                                        <h2 className="D-model-title h-50 align-content-center">Click the link below to explore a 3D model of our listings</h2>
                                        <a href="https://my.matterport.com/show/?m=zieDcGKRGua" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                            View 3D Model
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

const AvailabilityRow = ({ imageSrc, unit1, unit2 }) => {
    return (
        <div className="col-md-6 col-12 my-3">
            <div className="card rounded-0">
                <div className="image-container">
                    <img
                        src={imageSrc}
                        className="card-img-top rounded-0"
                        alt="Listing"
                        style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                    />
                </div>
                <div className="card-body p-0 my-3">
                    <h2 className="card-title">{`${unit1.number} / ${unit2.number} Dahlia Avenue`}</h2>
                    <div className="row justify-content-center my-2">
                        <div className="col-6 text-center">
                            <h6 className="card-text mb-2">Unit {unit1.number}</h6>
                            <span className={`badge ${unit1.availability ? 'bg-success' : 'bg-danger'}`} style={{ height: '40%' }}>
                                {unit1.availability ? 'Available' : 'Unavailable'}
                            </span>
                        </div>

                        <div className="col-6 text-center">
                            <h6 className="card-text mb-2">Unit {unit2.number}</h6>
                            <span className={`badge ${unit2.availability ? 'bg-success' : 'bg-danger'}`} style={{ height: '40%' }}>
                                {unit2.availability ? 'Available for $3250' : 'Unavailable'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

AvailabilityRow.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    unit1: PropTypes.shape({
        number: PropTypes.number.isRequired,
        availability: PropTypes.bool.isRequired
    }).isRequired,
    unit2: PropTypes.shape({
        number: PropTypes.number.isRequired,
        availability: PropTypes.bool.isRequired
    }).isRequired
};

export default Availability;
