import React, { useState } from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare, } from 'react-icons/fa'
import './Navbar2.css'
import { GiHamburgerMenu } from 'react-icons/gi'
export default function Navbar2() {

    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <nav className='main-nav'>

                <div className='logo'>
                    <h2>
                        <span>B</span>iplab
                        <span>S</span>arkar
                    </h2>
                </div>


                <div className='menu-link'>
                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                        <li>
                            <a href='#'>Services</a>
                        </li>
                    </ul>
                </div>

                <div className={showMenu ? "toggle-menu" : "show-menu"}>

                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>
                        <li>
                            <a href='#'>Contact</a>
                        </li>
                        <li>
                            <a href='#'>About</a>
                        </li>
                    </ul>
                </div>


                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li>
                            <a href='#'><FaFacebookSquare className='facebook' /></a>
                        </li>
                        <li>
                            <a href='#'><FaInstagramSquare className='instagram' /></a>
                        </li>
                        <li>
                            <a href='#'><FaYoutubeSquare className='youtube' /></a>
                        </li>
                    </ul>

                    <div className='hamburger-menu'>

                        <a href='#' onClick={() => setShowMenu(!showMenu)}>
                            <GiHamburgerMenu className='menu' />
                        </a>

                    </div>
                </div>
            </nav>

            
        </>
    )
}
