//import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResidenceProperty = () => {
    return (
        <div className="container-fluid" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
            <div className="container">
                <h1>Residence & Property</h1>
                <p>Details about the residence and available properties go here.</p>
                <h3>
                    Take a walk to the sand, relax with the sunset and enjoy neighborhood events year-round. We&apos;re a small community of
                    16 units close to:
                </h3>
                <div className="row">
                    <div className="col-6 text-start">
                        <ul>
                            <li>Shopping</li>
                            <li>Entertainment</li>
                        </ul>
                    </div>
                    <div className="col-6 text-start">
                        <ul>
                            <li>Easy access to transportation, employment centers, and military bases</li>
                            <li>Activities, natural attractions, and interests that San Diego has to offer</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResidenceProperty;
