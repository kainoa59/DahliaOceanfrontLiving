import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Home from './pages/Home';
import ResidenceProperty from './pages/ResidenceProperty';
import Availability from './pages/Availability';
import Gallery from './pages/Gallery';

function App() {
  const navRef = useRef(null);

  const handleNavItemClick = () => {
    if (navRef.current?.classList.contains('show')) {
      navRef.current.classList.remove('show');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && navRef.current?.classList.contains('show')) {
        navRef.current.classList.remove('show'); // Close menu on resize
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    // ran
    <Router basename="/"> {/* Set the basename to the GitHub Pages subdirectory */}
      <div className="main">
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
            <div className="container-fluid pb-0 px-0">
              <NavLink className="navbar-brand px-4 py-3" to="/">Dahlia Coastal Living IB</NavLink>
              <button
                className="navbar-toggler border-0 px-4"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse pb-0" id="navbarSupportedContent" ref={navRef}>
                <ul className="navbar-nav ms-auto mb-lg-0 px-4">
                  <li className="nav-item">
                    <NavLink className="nav-link py-0" to="/" onClick={handleNavItemClick}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link py-0" to="/residence-property" onClick={handleNavItemClick}>Residence & Property</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link py-0" to="/contact-availability" onClick={handleNavItemClick}>Availability</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link py-0" to="/gallery" onClick={handleNavItemClick}>Gallery</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/residence-property" element={<ResidenceProperty />} />
            <Route path="/contact-availability" element={<Availability />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
