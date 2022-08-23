import React from 'react';

import banner from '../../assets/img/IMG_0668.jpg'
import Sale from './Sale';

import css from './style.module.css'

const BigBanner = () =>
{
    return (
		<div className={`${css.banner} relative`}>
      <Sale />
    </div>
	)
}

export default BigBanner;