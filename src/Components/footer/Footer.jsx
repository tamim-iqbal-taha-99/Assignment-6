import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white px-2.5 py-5 lg:px-52 lg:py-28 '>
            <div className='flex flex-col lg:flex-row  lg:justify-around space-y-11 border-b-2 pb-3.5'>
                <div className='space-y-9'>
                    <h1 className='lg:text-7xl font-bold text-violet-800'>DigiTools</h1>
                    <p className='lg:text-3xl font-bold opacity-65'>Premium digital tools for creators, <br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>

                <div className=' space-y-2 lg:space-y-6'>
                    <h1 className='lg:text-3xl font-bold'>Product</h1>
                    <p>Features</p>
                    <p>Pricing</p>
                    <p>Templates</p>
                    <p>Integrations</p>
                </div>

                <div className=' space-y-2 lg:space-y-6'>
                    <h1 className='lg:text-3xl font-bold'>Company</h1>
                    <p>About</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Press</p>
                </div>

                <div className=' space-y-2 lg:space-y-6'>
                    <h1 className='lg:text-3xl font-bold'>Resources</h1>
                    <p>Documentation</p>
                    <p>Help Center</p>
                    <p>Community</p>
                    <p>Contact</p>
                </div>


                



            </div>

            <div className=' lg:mt-8 lg:text-3xl'>
                <p className='text-center  opacity-60 pt-2.5 '>© 2026 Digitools. All rights reserved.</p>
            </div>

        </div>
    );
};

export default Footer;