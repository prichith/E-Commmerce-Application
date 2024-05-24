import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
    <div className="container footer">
      <div className="ftr-social-link">
        <h3>Get In Touch</h3>
        <p className="ftr-lnk-1st-col-p">the quick fox jumps over the lazy dog</p>
        <div className="social-media-icons">
          <a href="#"><i className="fa-brands fa-facebook social-icons"></i></a>
          <a href="#"><i className="fa-brands fa-instagram social-icons"></i></a>
          <a href="#"><i className="fa-brands fa-twitter social-icons"></i></a>
        </div>
      </div>
      <div className="ftr-link-columns">
        <h3>Company info</h3>
        <div className="ftr-colm-links">
          <a href="#">
            <p>About Us</p>
          </a>
          <a href="#">
            <p>Carrier</p>
          </a>
          <a href="#">
            <p>We are hiring</p>
          </a>
          <a href="#">
            <p>Blog</p>
          </a>
        </div>
      </div>
      <div className="ftr-link-columns">
        <h3>Features</h3>
        <div className="ftr-colm-links">
          <a href="#">
            <p>Business Marketing</p>
          </a>
          <a href="#">
            <p>User Analytic</p>
          </a>
          <a href="#">
            <p>Unlimited Support</p>
          </a>
        </div>
      </div>
      <div className="ftr-link-columns">
        <h3>Resources</h3>
        <div className="ftr-colm-links">
          <a href="#">
            <p>IOS & Android</p>
          </a>
          <a href="#">
            <p>Watch a Demo</p>
          </a>
          <a href="#">
            <p>Customers</p>
          </a>
          <a href="#">
            <p>API</p>
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer