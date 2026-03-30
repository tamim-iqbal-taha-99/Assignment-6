import React from 'react';

const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm lg:px-52 py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><span className='lg:text-5xl text-violet-600 lg:font-bold'>DigiTools</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-xl font-semibold">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>

                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <a href="" className='lg:text-2xl font-semibold'>Login</a>
                    <a className="btn btn-primary rounded-full ">Get Started</a>
                </div>
            </div>

        </div>
    );
};

export default NavBar;