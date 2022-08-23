import React from 'react';

import arrow from '../../assets/img/arrow.svg'

const LinkedCard = () =>
{
    return (
        <div className="w-1/3 bg-gray-500 h-[700px] mx-2 relative">
            <p className="uppercase text-white text-3xl absolute bottom-6 left-4">cardigans</p>
            <div className="absolute bottom-6 right-4 cursor-pointer">
                <img src={arrow} alt="arrow" />
            </div>
        </div>
	)
}

export default LinkedCard;