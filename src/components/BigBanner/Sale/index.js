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
    <div class="flex items-center justify-center">
      <p class={`${css.upto} mr-4`}>Upto</p>
      <p class={css.num}>60%<span class={css.ff}>ff</span></p>
    </div>
  </div>
	)
}

export default Sale;