import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Gallery.css';

const Gallery = () => {
    // Array of image numbers used for constructing the image file names
    const imageNumbers = [1907, 1914, 1917, 1919, 1920, 1921, 1923, 1924, 1925, 1926, 1930, 1931, 1935, 1938, 1943, 1946, 1949, 1951, 1952, 1953, 1954, 1957, 1963, 1969, 1972, 1975, 1979, 1981, 1982];

    // State to manage the currently active image in the carousel
    const [activeIndex, setActiveIndex] = useState(0);

    // Preload all the images when the component is mounted
    useEffect(() => {
        // Loop through imageNumbers array and preload images
        imageNumbers.forEach((number) => {
            const img = new Image();
            img.src = `/Compressed_Images/IMG_${number}.jpeg`;  // Construct image path dynamically
        });
    }, []);  // Empty dependency array ensures this runs only once when the component mounts

    // Function to handle the change of image based on thumbnail click
    const handleThumbnailClick = (index) => {
        setActiveIndex(index);  // Update the active index based on the clicked thumbnail
    };

    return (
        <div className="container-fluid" style={{ paddingLeft: '5%', paddingRight: '5%' }}>
            <div className="container text-center">
                <h1>Property Gallery</h1>  {/* Main heading */}
            </div>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                
                {/* Carousel Indicators */}
                <ol className="carousel-indicators">
                    {imageNumbers.map((number, index) => (
                        <li 
                            key={number}
                            data-bs-target="#carouselExampleControls"
                            data-bs-slide-to={index} 
                            className={index === activeIndex ? 'active' : ''} 
                        ></li>
                    ))}
                </ol>

                {/* Carousel Inner */}
                <div className="carousel-inner">
                    {imageNumbers.map((number, index) => (
                        <div key={number} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                            <img className="d-block w-100" src={`/Compressed_Images/IMG_${number}.jpeg`} alt={`Slide ${index + 1}`} />
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </a>
            </div>

            {/* Thumbnails Section */}
            <div className="row mt-3">
                {imageNumbers.map((number, index) => (
                    <div className="col-2 mb-2" key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                        <img 
                            className="img-thumbnail"
                            src={`/Compressed_Images/IMG_${number}.jpeg`}
                            alt={`Thumbnail ${index + 1}`}
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleThumbnailClick(index)}  // Set active index when a thumbnail is clicked
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
