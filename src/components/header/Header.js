import React, {useEffect} from 'react';
import Button from '../UI/button/Button';
import './Header.css';
import {BsMouse} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
        });
      }, []);
    return (
        <section className="header">
            <div className="container header">
                <div className="header-left" data-aos="fade-right">
                    <h1>
                        <span>THE WORLD'S LEADING</span>
                        <span> MESSAGING SYSTEM</span>
                    </h1>
                    <p className='u-text-small u-text-light'>ChatMe is a messaging application that connects friends and families together.
                        it enables everyone to relive the happy moments and have fun as well.
                    </p>
                    <div className="header-cta">
                    <Button text={'Get Started'} btnClass={'btn-dark'} href={'#'}/>
                    <Button text={'How it Works'} btnClass={'btn-orange'} href={'#'}/>
                </div>
                </div>
                <div className="header-right" data-aos="fade-left">
                    <img src="./images/phone-header-bg.png" alt="" />
                </div>
                <div className="floating-icon">
                <a href="#features">
                <BsMouse color="#fff" size={25} className="mouse" />
                </a>
                 </div>
            </div>
        </section>
    )
}

export default Header
