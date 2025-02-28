import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { useRef } from 'react';
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
    const navbarCollapse = navRef.current;
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <Router>
      <div className='main'>
        <header>
          {/* BEGIN NAVBAR SECTION */}
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid px-4">
              <NavLink className="navbar-brand" to="/">
                Dahlia Coastal Living IB
              </NavLink>
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
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
                ref={navRef}
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to="/"
                      onClick={handleNavItemClick}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to="/residence-property"
                      onClick={handleNavItemClick}
                    >
                      Residence & Property
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to="/contact-availability"
                      onClick={handleNavItemClick}
                    >
                      Contact/Availability
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                      to="/gallery"
                      onClick={handleNavItemClick}
                    >
                      Gallery
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        {/* BEGIN MAIN CONTENT SECTION */}
        <main>
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
