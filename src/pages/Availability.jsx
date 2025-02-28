import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';

const Availability = () => {
    const listings = [
        { number: 1895, unit1: true, unit2: false },
        { number: 1896, unit1: false, unit2: true },
        { number: 1897, unit1: true, unit2: true },
        { number: 1898, unit1: false, unit2: false },
        { number: 1899, unit1: true, unit2: false },
        { number: 1900, unit1: false, unit2: true },
        { number: 1901, unit1: true, unit2: true },
        { number: 1902, unit1: false, unit2: false },
    ];

    return (
        <div className="container-fluid" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
            {listings.map(({ number, unit1, unit2 }) => (
                <React.Fragment key={number}>
                    <AvailabilityRow
                        imageSrc={`/images/IMG_${number}.jpg`}
                        unit1={unit1}
                        unit2={unit2}
                    />
                    <hr />
                </React.Fragment>
            ))}
        </div>
    );
};

const AvailabilityRow = ({ imageSrc, unit1, unit2 }) => {
    return (
        <div className="row align-items-center">
            <div className="col-md-6 col-12 text-center">
                <img
                    src={imageSrc}
                    className="rounded img-fluid"
                    alt="Listing"
                    style={{ width: '80%', maxWidth: '500px' }}
                />
            </div>

            <div className="col-md-3 col-6 text-center">
                <h5>Unit 1</h5>
                <span className={`badge ${unit1 ? 'bg-success' : 'bg-danger'}`}>
                    {unit1 ? 'Available' : 'Unavailable'}
                </span>
            </div>

            <div className="col-md-3 col-6 text-center">
                <h5>Unit 2</h5>
                <span className={`badge ${unit2 ? 'bg-success' : 'bg-danger'}`}>
                    {unit2 ? 'Available' : 'Unavailable'}
                </span>
            </div>
        </div>
    );
};

AvailabilityRow.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    unit1: PropTypes.bool.isRequired,
    unit2: PropTypes.bool.isRequired,
};

export default Availability;
