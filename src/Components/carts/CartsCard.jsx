import React from 'react';

const CartsCard = ({ cartsCard }) => {



    return (
        <div className='border p-4 rounded-lg bg-amber-50'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center space-x-3 text-2xl font-semibold'>
                    <img src={cartsCard.img} alt="" />
                    <div>
                        <h1>{cartsCard.name}</h1>
                        <p className='opacity-60'>{cartsCard.price}</p>
                    </div>
                </div>
                <button className='border border-red-600 rounded-full h-fit  px-2.5 text-lg font-semibold text-red-600'>Remove</button>

            </div>

        </div>
    );
};

export default CartsCard;