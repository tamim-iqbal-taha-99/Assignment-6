import React from 'react';
import { Rocket } from 'lucide-react';
import { useState } from 'react';

const ProductCards = ({ details, carts, setCarts }) => {
    const [btnStatus, setBtnStatus] = useState(false);
    const handleBtnStatus=()=>{
        setBtnStatus(true)
        setCarts([...carts, details])
    }
    

    return (
        <div>
            <div className='shadow-lg p-4 bg-amber-100 rounded-lg '>
                <div className=' shadow-lg rounded-full overflow-hidden w-fit '><img src={details.img} alt="" /></div>
                <div className='text-start space-y-1.5 '>
                    <h1 className=' text-2xl font-bold'>{details.name}</h1>
                    <p className='text-lg font-semibold opacity-70'>{details.description}</p>
                    <h1 className='text-2xl font-bold'>${details.price}</h1>
                    <div className=' text-lg font-semibold opacity-75 text-green-900'>
                        <ul>
                            {details.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={handleBtnStatus} className='btn btn-primary rounded-full mt-3 w-full text-2xl '>{btnStatus?'Added to cart':'Buy Now'}</button>
                </div>

            </div>

        </div>
    );
};

export default ProductCards;