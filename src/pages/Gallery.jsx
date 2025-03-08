import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Gallery.css';
import Footer from '../components/Footer';

const Gallery = () => {
    // Array of image numbers used for constructing the image file names
    const imageNumbers = [1935, 1930, 1952, 1943, 1946, 1938, 1907, 1914, 1917, 1919, 1920, 1921, 1923, 1924, 1925, 1926, 1931, 1949, 1951, 1953, 1954, 1957, 1963, 1969, 1972, 1975, 1979, 1981, 1982];

    // State to manage the currently active image in the carousel
    const [activeIndex, setActiveIndex] = useState(0);

    // Preload all the images when the component is mounted
    useEffect(() => {
        // Loop through imageNumbers array and preload images
        imageNumbers.forEach((number) => {
            const img = new Image();
            img.src = `/DahliaOceanfrontLiving/Compressed_Images/IMG_${number}.jpeg`;  // Construct image path dynamically
        });
    }, []);  // Empty dependency array ensures this runs only once when the component mounts

    // Function to handle the change of image based on thumbnail click
    const handleThumbnailClick = (index) => {
        setActiveIndex(index);  // Update the active index based on the clicked thumbnail
    };

    return (
        <main>
            <div className="container-fluid background pt-4 px-6" style={{ paddingLeft: '10%', paddingRight: '10%' }}>
                <div className='content-container'>
                    <div className="container text-center">
                        <h1 className='home-title py-3 m-0'>Property Gallery</h1>  {/* Main heading */}
                    </div>
                    <div className='hr-tag'>
                        <hr className='mt-0' style={{ width: '60%' }}></hr>
                    </div>

                    <div id="carouselExampleControls" className="carousel slide px-4" data-bs-ride="carousel">

                        {/* Carousel Indicators */}
                        <ol className="carousel-indicators pb-2">
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
                        <div className="carousel-inner mb-3">
                            {imageNumbers.map((number, index) => (
                                <div key={number} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                                    <img className="d-block w-100" src={`/DahliaOceanfrontLiving/Compressed_Images/IMG_${number}.jpeg`} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <div className="carousel-controls">
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <div className='hr-tag'>
                        <hr style={{ width: '60%' }}></hr>
                    </div>

                    {/* Thumbnails Section */}
                    <div className="row mt-3 px-3">
                        {imageNumbers.map((number, index) => (
                            <div className="col-4 col-sm-4 col-md-2 mb-3 d-flex justify-content-center" key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                                <img
                                    className="img-thumbnail p-0"
                                    src={`/DahliaOceanfrontLiving/Compressed_Images/IMG_${number}.jpeg`}
                                    alt={`Thumbnail ${index + 1}`}
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => handleThumbnailClick(index)}  // Set active index when a thumbnail is clicked
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
};

export default Gallery;
