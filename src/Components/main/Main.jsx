import React from 'react';
import { use } from 'react';
import ProductCards from './ProductCards';


const Main = ({ fetchData, carts, setCarts }) => {
    const loadFetchData = use(fetchData)





    return (
        <div className=' text-center '>
            <div className='space-y-6 '>
                <div className='space-y-1.5'>
                    <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
                    <p className='text-lg font-semibold opacity-70'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                </div>
                

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3  p-9 rounded-lg shadow-2xl'>

                    {
                        loadFetchData.map(details => <ProductCards key={details.id} details={details} carts={carts} setCarts={setCarts}></ProductCards>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Main;