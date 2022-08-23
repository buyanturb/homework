import React from 'react';

import css from './style.module.css'

import globe from '../../../assets/img/globe.svg'

const TopHeader = () =>
{
    return (
		<div className={`${css.test} h-[41px] flex justify-between items-center text-white px-2 sm:px-11 drop-shadow-lg`} style={{ background: '#3A416F' }}>
      <div className="flex items-center">
        <img src={globe} alt="Logo" />
        <label className="ml-3">Global - English</label>
      </div>
      <span className="sm:block hidden">
        <label>RETURNING AN ORDER?</label>
        <a className="ml-3 underline underline-offset-1 cursor-pointer">Click for more info</a>
      </span>
      <div>
        <a className="mr-4 cursor-pointer">SIGN IN</a>
        <a className="cursor-pointer">SING UP</a>
      </div>
    </div>
	)
}

export default TopHeader;