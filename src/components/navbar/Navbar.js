import React, {useState} from 'react';
import './Navbar.css';
import {AiOutlineBars} from 'react-icons/ai';
import {RiCloseLine} from 'react-icons/ri'
import Button from '../UI/button/Button';

const Navbar = () => {
    const [showMenu, setShowMenu]=useState(false);
    const toggleMenu=()=>{
        setShowMenu(!showMenu);
    }
    return (
        <div className='container navbar'>
            <div className="logo">
                <img src="./images/logo.png" alt="" />
            </div>
            <menu>
                <ul className="nav-links" onClick={toggleMenu} id={showMenu? 'nav-links-mobile':'nav-links-mobile-hide' }>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#download">Download</a></li>
                    <li><a href="#subscribe">Subscribe</a></li>
                    <li><a href="#faq">FAQs</a></li>

                </ul>
            </menu>
            <div className="menu-icons" onClick={toggleMenu}>
                {
                    showMenu? <RiCloseLine color='#fff' size={30}/> :<AiOutlineBars color='#fff' size={27}/>
                }
            </div>
        </div>
    )
}

export default Navbar
