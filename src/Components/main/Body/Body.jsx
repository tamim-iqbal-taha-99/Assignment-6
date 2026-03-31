import React from 'react';

const Body = () => {
    return (
        // main div
        <div>
            {/* get started cards */}
            <section className='px-3 py-4 lg:px-52 lg:py-28 text-center space-y-8'>
                <div className='space-y-6'>
                    <h1  className='text-2xl lg:text-7xl font-bold '>Get Started in 3 Steps</h1>
                    <p className=' text-lg lg:text-5xl font-semibold opacity-70'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                <div className='grid lg:grid-cols-3 gap-4'>
                    <div className='  rounded-lg shadow-2xl px-1 py-9 space-y-3.5'>
                        <img className=' max-w-full mx-auto' src="user.png" alt="" />
                        <h1 className='text-xl font-bold '>Create Account</h1>
                        <p className='text-lg font-semibold opacity-70'>Sign up for free in seconds. No credit card required to get started.</p>

                    </div>
                    <div className='  rounded-lg shadow-2xl px-1 py-9 space-y-3.5'>
                        <img className=' max-w-full mx-auto' src="package.png" alt="" />
                        <h1 className='text-xl font-bold '>Choose Product</h1>
                        <p className='text-lg font-semibold opacity-70'>Browse our catalog and select the tools that fit your needs.</p>

                    </div>
                    <div className='  rounded-lg shadow-2xl px-1 py-9 space-y-3.5'>
                        <img className=' max-w-full mx-auto' src="rocket.png" alt="" />
                        <h1 className='text-xl font-bold '>Start Creating</h1>
                        <p className='text-lg font-semibold opacity-70'>Download and start using your premium tools immediately.</p>

                    </div>
                  

                </div>

            </section>

            {/* pricing cards */}
            <section>

            </section>

            {/* workflow section  */}
            <section>

            </section>
            
        </div>
    );
};

export default Body;