import React from 'react';
import FooterBg from '../../../assets/images/footer-bg.png'
const Footer = () => {
    return (
        <footer
        style={{
       background:`url(${FooterBg})`,
       backgroundSize:'cover'
        }} 
        className=" p-10">
        <div className='footer'>
        <nav>
          <header className="footer-title">SERVICES</header> 
          <a className="link link-hover">Emergency Checkup</a>
          <a className="link link-hover">Monthly Checkup</a>
          <a className="link link-hover">Weekly Checkup</a>
          <a className="link link-hover">Deep Checkup</a>
        </nav> 
        <nav>
          <header className="footer-title">ORAL HEALTH</header> 
          <a className="link link-hover">Fluoride Treatment</a>
          <a className="link link-hover">Cavity Filling</a>
          <a className="link link-hover">Teath Whitening</a>
          <a className="link link-hover">Teath Whitening</a>
          
        </nav> 
        <nav>
          <header className="footer-title">OUR ADDRESS</header> 
          <a className="link link-hover">New York - 101010 Hudson</a>
    <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        </div>
        <div>
        <p className='text-center mt-32'>Copyright 2022 All Rights Reserved</p>
        </div>
      </footer>
    );
};

export default Footer;