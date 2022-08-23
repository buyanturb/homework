import React from 'react';

import css from './style.module.css'

const Box = () =>
{
    return (
		<div className={css.boxBackground}>
			<div className="md:flex md:justify-between sm:px-12 px-4 bg-[#333] py-7 md: items-center"></div>
			<h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal md:w-2/5">
				<span className="text"></span>
			</h1>
		</div>
	)
}

export default Box;