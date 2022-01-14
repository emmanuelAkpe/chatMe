import React, {useEffect}from 'react'
import "./Footer.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFax,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return (
        <footer id='footer'>
            <div className="container footer">
                <div className="footer-box"data-aos="fade-right" >
                    <h4>Useful Links</h4>
                    <div className="footer-links" >
                        <a href="#">&bull; support</a>
                        <a href="#">&bull; About</a>
                        <a href="#">&bull; Learn</a>
                        <a href="#">&bull; Hosting</a>
                        <a href="#">&bull; Messenger</a>
                    </div>
                </div>
                <div className="footer-box"  data-aos="fade-right">
                    <h4>Support</h4>
                    <div className="footer-links">
                        <a href="#">&bull; support</a>
                        <a href="#">&bull; About</a>
                        <a href="#">&bull; Learn</a>
                        <a href="#">&bull; Hosting</a>
                        <a href="#">&bull; Messenger</a>
                    </div>
                </div>
                <div className="footer-box" data-aos="fade-left">
                    <h4>Contact Us</h4>
                    <div className="footer-links" >
                            <p>
                    <FaMapMarkerAlt /> &nbsp; Address: Ghana.
                    </p>
                    <p>
                    <FaPhoneAlt /> &nbsp; Phone: +233 542879063.
                    </p>
                    <p>
                    <FaFax /> &nbsp; Fax: +23358754154
                    </p>
                    <p>
                    <FaEnvelope /> &nbsp; Email: info@chatme.com
                    </p>
                    <p>
                    <FaGlobe /> &nbsp; Website: www.chatme.com
                    </p>

                    </div>
                </div>
                <div className="footer-box" data-aos="fade-left">
                    <img src="./images/logo.png" alt="" />
                    <p className="u-small-text">
                        &copy; copyright 2020. ChatMe
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
