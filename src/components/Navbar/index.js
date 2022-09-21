import React, { useState } from 'react';
import TopHeader from './TopHeader';

import logo from '../../assets/img/logo.svg'

import like from '../../assets/img/like.svg'

import bag from '../../assets/img/bag.svg'

import search from '../../assets/img/search.svg'

import hamburger from '../../assets/img/hamburger.svg'

const Navbar = () =>
{
    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

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
            <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                <div className="sd-header">
                    <div className="text-black" onClick={ToggleSidebar}><i className="fal fa-times"></i></div>
                </div>
                <div className="sd-body">
                    <ul>
                        {
                            menus.map(
                                (el, idx) =>
                                {
                                    return(
                                        <li key={idx}><a className="sd-link">{el.name}</a></li>
                                    )
                                }
                            )
                        }

                    </ul>
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            <TopHeader />
            <div className="h-[53px] md:h-[88px] px-2 sm:px-11 flex items-center">
                <div className="w-1/3">
                    <ul className="hidden lg:flex flex uppercase cursor-pointer menus">
                        {
                            menus.map(
                                (el, idx) =>
                                {
                                    return(
                                        <li className="mr-10" key={idx}><a>{el.name}</a></li>
                                    )
                                }
                            )
                        }
                    </ul>
                    <div className="flex lg:hidden">
                        <img className="cursor-pointer mr-5" src={hamburger} alt="hamburger" onClick={ToggleSidebar} />
                        <div className="container relative mobile-search">
                            <input placeholder='Search...' className='js-search' type="text" />
                            <img className="cursor-pointer gg kk" src={search} alt="search" />
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex justify-center">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="flex items-center w-1/3 justify-end">
                    <input className="w-[260px] lg:block hidden placeholder:text-black bg-white w-full border border-slate-300 rounded-md py-2 pl-3 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="search" style={{ width: '260px' }} />
                    <img className="px-5 cursor-pointer" src={like} alt="like" />
                    <img className="cursor-pointer" src={bag} alt="bag" />
                </div>
            </div>
        </div>
	)
}

export default Navbar;