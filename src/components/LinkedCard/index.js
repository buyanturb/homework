import React from 'react';

import arrow from '../../assets/img/arrow.svg'

const LinkedCard = () =>
{
    return (
        <div className="md:w-1/3 w-1/2 bg-gray-500 md:h-[700px] h-[280px] mx-2 relative">
            <p className="uppercase text-white md:text-3xl text-sm absolute bottom-6 left-4">cardigans</p>
            <div className="absolute bottom-6 right-4 cursor-pointer w-[16.56px]">
                <img src={arrow} alt="arrow" />
            </div>
        </div>
	)
}

export default LinkedCard;