import React from 'react';

import collection from '../../assets/img/collection.jpg'

const Winter = () =>
{
    return (
		<div className="container flex mx-auto px-20">
            <div className="md:w-1/2">
                <h3 className="main-title">winter spice 2020</h3>
                <p>Infusion of summer pieces and cashmere silk blends.</p>
            </div>
            <div className="md:w-1/2">
                <img src={collection} />
            </div>
        </div>
	)
}

export default Winter;