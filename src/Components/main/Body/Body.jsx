import React from 'react';

const Body = () => {
    return (
        // main div
        <div>
            {/* get started cards */}
            <section className='px-3 py-4 lg:px-52 lg:py-28 text-center space-y-8'>
                <div className='space-y-6'>
                    <h1 className='text-2xl lg:text-7xl font-bold '>Get Started in 3 Steps</h1>
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
            <section className='my-9 space-y-10 px-3 py-4 lg:px-52 lg:py-28'>
                <div className='text-center grid gap-2.5'>
                    <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
                    <p className='font-semibold opacity-60'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                <div className=' grid lg:grid-cols-3 gap-3.5'>
                    <div className='bg-[#F9FAFC] shadow-2xl space-y-5 rounded-lg p-2'>
                        <div>
                            <h1 className='text-4xl font-semibold'>Starter</h1>
                            <p className='text-lg opacity-70'>Perfect for getting started</p>
                        </div>

                        <h1 className='font-semibold text-4xl'>$0/month</h1>
                        <ul className=' text-lg font-semibold opacity-70'>
                            <li>Access to 10 free tools</li>
                            <li>Basic templates</li>
                            <li>community support </li>
                            <li>1 project per month</li>
                        </ul>
                        <button className='btn btn-primary  w-full'>Get Started Free</button>

                    </div>
                    <div className='bg-violet-500 shadow-2xl space-y-5 rounded-lg p-2 text-white'>
                        <div>
                            <h1 className='text-4xl font-semibold'>Pro</h1>
                            <p className='text-lg opacity-70'>Best for professionals</p>
                        </div>

                        <h1 className='font-semibold text-4xl'>$29/month</h1>
                        <ul className=' text-lg font-semibold opacity-70'>
                            <li>Access to all premium tools</li>
                            <li>Advanced analytics</li>
                            <li>Cloud sync</li>
                            <li>Priority support</li>
                        </ul>
                        <button className='btn   w-full'>Get Start pro</button>

                    </div>
                    <div className='bg-[#F9FAFC] shadow-2xl space-y-5 rounded-lg p-2'>
                        <div>
                            <h1 className='text-4xl font-semibold'>Enterprise</h1>
                            <p className='text-lg opacity-70'>For teams and businesses</p>
                        </div>

                        <h1 className='font-semibold text-4xl'>$99/month</h1>
                        <ul className=' text-lg font-semibold opacity-70'>
                            <li>Everything in Pro</li>
                            <li>Team collaboration</li>
                            <li>Custom integrations</li>
                            <li>SLA guarantee</li>
                        </ul>
                        <button className='btn btn-primary roundedfull w-full'>Contact Sales</button>

                    </div>


                </div>


            </section>

            {/* workflow section  */}
            <section className='text-center p-2 lg:px-52 lg:py-28 bg-violet-800 text-white space-y-5 lg:space-y-14'>
                <div className='space-y-3' >
                    <h1 className='text-4xl lg:text-6xl font-bold'>Ready to Transform Your Workflow?</h1>
                    <p className='text-lg lg:text-4xl font-semibold opacity-70'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                    
                </div>
                <div className='space-x-6 space-y-2.5 lg:space-y-8'>
                    <button className='btn btn-primary lg:text-2xl'>Explore Products</button>
                    <button className='btn lg:text-2xl'>View Pricing</button>
                    <p className='lg:text-2xl'>14-day free trial • No credit card required • Cancel anytime</p>

                </div>

            </section>

        </div>
    );
};

export default Body;