// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useRef } from 'react';
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

  return (
    <Router basename="/DahliaOceanfrontLiving"> {/* Ensures React Router does not interfere with static file requests */}
      <div className="main">
        <header>
          <nav className="navbar navbar-expand-lg bg-body-tertiary py-0">
            <div className="container-fluid px-4">
              <NavLink className="navbar-brand" to="/">Dahlia Coastal Living IB</NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent" ref={navRef}>
                <hr/>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" onClick={handleNavItemClick}>Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/residence-property" onClick={handleNavItemClick}>Residence & Property</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact-availability" onClick={handleNavItemClick}>Availability</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/gallery" onClick={handleNavItemClick}>Gallery</NavLink>
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
