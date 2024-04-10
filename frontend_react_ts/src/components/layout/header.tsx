import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import GuestHeader from './guestheader';

const Header: React.FC = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  
   // Check if the current location is '/login'
   if (location.pathname === '/login' || location.pathname === '/register') {
    // Render the GuestHeader component for the login page
    return <GuestHeader />;
  }




  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/event_search?query=${encodeURIComponent(searchQuery)}`);
    console.log('Searching for:', searchQuery);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility

  return (
   
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="container-fluid">
        

      <Link to="/main" style={{ fontSize: '40px', fontFamily: 'Pacifico', textDecoration: 'none', color: 'white' }}> EventureMap 🔍</Link>
        {/* Center the search bar */}
        <div style={{ flexGrow: 1, marginLeft: '20%', display: 'flex', justifyContent: 'center' }}>
          <form className="d-flex" onSubmit={handleSearchSubmit}>
            <input className="form-control me-2" type="search" value={searchQuery} onChange={handleSearchChange} placeholder="Search" style={{ fontSize: '20px', height: '40px' }} />
            <button className="btn btn-secondary" type="submit" style={{ fontSize: '16px' }}>Search</button>
          </form>
        </div>
  
        {/* Align the collapsible content to the right */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarColor01">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/main">Home <span className="visually-hidden">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/users/events`}>Your Events</Link>
            </li>
            {/*<li className="nav-item">
              <Link className="nav-link" to={`/users/hosting`}>Hosting</Link>
            </li>*/}
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
   
  );
};

export default Header;
