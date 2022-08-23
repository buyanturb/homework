import React from 'react';
import TopHeader from './TopHeader';

import logo from '../../assets/img/logo.svg'

import like from '../../assets/img/like.svg'

import bag from '../../assets/img/bag.svg'

const Navbar = () =>
{
    const menus = [
        {
            name: "women"
        },
        {
            name: "men"
        },
        {
            name: "home"
        },
        {
            name: "ACCESSORIES"
        },
        {
            name: "organic"
        }
    ]

    return (
		<div className="z-10 text-white">
            <TopHeader />
            <div className="h-[88px] px-2 sm:px-11 flex items-center">
                <div className="w-1/3">
                    <ul className="hidden md:flex uppercase cursor-pointer menus">
                        {menus.map(
                            (el, idx) =>
                            {
                                return(
                                    <li className="mr-10" key={idx}><a>{el.name}</a></li>
                                )
                            }
                        )}
                    </ul>
                </div>
                <div className="w-1/3 flex justify-center">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flex items-center w-1/3 justify-end">
                    <input className="w-[260px] sm:block hidden placeholder:text-black block bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="search" />
                    <img className="px-5 cursor-pointer" src={like} alt="like" />
                    <img className="cursor-pointer" src={bag} alt="bag" />
                </div>
            </div>
        </div>
	)
}

export default Navbar;