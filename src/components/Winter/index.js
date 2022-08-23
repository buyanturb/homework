import React from 'react';

import collection from '../../assets/img/collection.jpg'

const Winter = () =>
{
    return (
		<div className="container flex mx-auto px-20">
            <div className="md:w-1/2">
                <h3 className="main-title">winter spice 2020</h3>
                <p>Infusion of summer pieces and cashmere silk blends.</p>
                <button className="cursor-pointer rounded-lg text-lg md:px-10 md:py-3 px-8 py-2 bg-zinc-900 text-white cursor-pointer mt-6 uppercase font-medium m-auto block md:inline">shop now</button>

            </div>
            {/* <div className="md:w-1/2">
                <img src={collection} />
            </div> */}
        </div>
	)
}

export default Winter;