import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/FirstPage.css';

function FirstPage() {
  return (
    <div className="first-page">
      <h1>Welcome to New supercool webshop</h1>
      <div className="moving-text-container">
        <span className="moving-text">
          <span className="moving-text-item">Good Price,</span>&nbsp;
          <span className="moving-text-item">Fast delivery,</span>&nbsp;
          <span className="moving-text-item">Famous Brands</span>&nbsp;
        </span>
      </div>
      <div className="button1">
        <Link to="homepage" className="btn-pink">ENTER SHOP</Link>
      </div>
    </div>
  );
}

export default FirstPage;
