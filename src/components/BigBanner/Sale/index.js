import React, { useEffect } from 'react';

import css from './style.module.css'

import Aos from 'aos';
import "aos/dist/aos.css"

const Sale = () =>
{
  useEffect(
    () =>
    {
      Aos.init({ duration: 1500 })
    },
    []
  )
  return (
  <div className={css.saleWrapper} data-aos="fade-down">
    <h1 className={css.title}>Summer</h1>
    <span className={css.sale}>Sale</span>
    <div className="flex items-center justify-center">
      <p className={`${css.upto} mr-4`}>Upto</p>
      <p className={css.num}>60%<span className={css.ff}>ff</span></p>
    </div>
  </div>
	)
}

export default Sale;