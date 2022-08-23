import React from 'react';

import css from './style.module.css'

const TopHeader = () =>
{
    return (
		<div class={`${css.test} h-[41px] flex justify-between items-center text-white px-11`} style={{ background: '#3A416F' }}>
      <span>Global - English</span>
      <span className="md:block">
        RETURNING AN ORDER?
        <a className="ml-3 underline underline-offset-1 cursor-pointer">Click for more info</a>
      </span>
      <div>
        <a className="mr-4">SIGN IN</a>
        <a>SING UP</a>
      </div>
    </div>
	)
}

export default TopHeader;