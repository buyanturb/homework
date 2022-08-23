import React from 'react';
import TopHeader from './TopHeader';

import logo from '../../assets/img/logo.png'

const Navbar = () =>
{
    return (
		<div>
            <TopHeader />
            <div className="h-[88px] px-11">
                <ul className="hidden md:flex">
                    <li>Women</li>
                    <li>Men</li>
                    <li>Home</li>
                    <li>Accessories</li>
                    <li>Organic</li>
                </ul>
            </div>
            {/* <img src={logo} alt="Logo" /> */}
        </div>
	)
}

export default Navbar;