import React from 'react';

import css from './style.module.css'

import sale from '../../../assets/img/Sale.svg'

const Sale = () =>
{
    return (
		<div className={css.saleWrapper}>
            <h1 className={css.title}>Summer</h1>
            {/* <img className={css.saleWord} src={sale} /> */}
            <span className={css.sale}>Sale</span>
        </div>
	)
}

export default Sale;