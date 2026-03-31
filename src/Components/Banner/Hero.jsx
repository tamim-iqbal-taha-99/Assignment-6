import React from 'react';
import banner from '../../assets/banner.png'

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="lg:max-w-sm  shadow-2xl w-[400px]  object-cover rounded-xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Supercharge Your <br />Digital Workflow</h1>
                        <p className="py-6">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.

                            Explore Products
                        </p>
                        <div className='space-x-5'>
                            <button className="btn btn-primary rounded-full">Explore Products</button>
                            <button className="btn btn-outline btn-primary rounded-full">Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex px-52 py-16 justify-center bg-violet-700 text-white rounded-lg'>
                <div className=' border-r-2 px-11'>
                    <h1 className='text-7xl font-bold'>50K+</h1>
                    <h3 className='text-2xl font-semibold opacity-75'>Active Users</h3>
                </div>
                <div className=' border-r-2 border/40  px-11'>
                    <h1 className='text-7xl font-bold'>200+</h1>
                    <h3 className='text-2xl font-semibold opacity-75'>Premium Tools</h3>
                </div>

                <div className='px-11'>
                    <h1 className='text-7xl font-bold'>4.9</h1>
                    <h3 className='text-2xl font-semibold opacity-75'>Rating</h3>
                </div>

            </div>

        </div>
    );
};

export default Hero;