import React from 'react';
import TopHeader from './TopHeader';

import logo from '../../assets/img/logo.svg'

import like from '../../assets/img/like.svg'

import bag from '../../assets/img/bag.svg'

const Navbar = () =>
{
    return (
		<div className="z-10 text-white">
            <TopHeader />
            <div className="h-[88px] px-2 sm:px-11 flex justify-between items-center">
                <div>
                    <ul className="hidden md:flex uppercase cursor-pointer menus">
                        <li className="mr-10"><a>Women</a></li>
                        <li className="mr-10"><a>Men</a></li>
                        <li className="mr-10"><a>Home</a></li>
                        <li className="mr-10"><a>Accessories</a></li>
                        <li className="mr-10"><a>Organic</a></li>
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flex items-center">
                    <input className="sm:block hidden placeholder:text-black block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="search" />
                    <img className="px-3 cursor-pointer" src={like} alt="like" />
                    <img className="cursor-pointer" src={bag} alt="bag" />
                </div>
            </div>
        </div>
	)
}

export default Navbar;