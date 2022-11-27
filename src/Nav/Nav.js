import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

export const Nav = () => {
  return (
    <div id="Nav">
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/new-request">New Request</Link>
      </div>
      <div className="actions">
        <div>
          <input type="text" name="" id="" placeholder="Search" />
          {/* magnifying glass icon */}
        </div>
        <button>Bell</button>
        <figure>
          <img src="" alt="" />
          <h3>User Name</h3>
          <p>v</p>
        </figure>
      </div>
    </div>
  );
};
