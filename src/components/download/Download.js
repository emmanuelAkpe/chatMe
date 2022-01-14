import React, {useEffect} from 'react';
import './Download.css'
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
    return (
        <section id="download" data-aos="fade-down">
            <div className="container download">
                <h2>ChatMe Messenger Download</h2>
                <p className="u-text-small u-text-light">
                    ChatMe Messenger is available for download on all stores.
                </p>
                <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>
            <div className="download-icon">
              <GrAndroid /> <p>Android</p>
            </div>
            <div className="download-icon">
              <FaWindows /> <p>Windows</p>
            </div>
          </div>
        </IconContext.Provider>
            </div>
        </section>
    )
}

export default Download
