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
                    <ul className="hidden md:flex">
                        <li><a clasName="flex h-full items-center px-4 duration-300 ease-out">Women</a></li>
                        <li><a>Men</a></li>
                        <li><a>Home</a></li>
                        <li><a>Accessories</a></li>
                        <li><a>Organic</a></li>
                    </ul>
                </div>
                <div>
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flex items-center">
                    <input className=" placeholder:text-black block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="search" />
                    <img className="px-3 cursor-pointer" src={like} alt="like" />
                    <img className="px-3 cursor-pointer" src={bag} alt="bag" />
                </div>
            </div>
        </div>
	)
}

export default Navbar;