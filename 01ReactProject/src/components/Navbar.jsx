import React from 'react'

function Navbar() {
    return (
        <nav className="navbar flex flex-row justify-between items-center px-4 sm:px-8 md:px-16 lg:px-[100px] py-[18px] w-full max-w-[1500px] h-[72px] m-auto">
            <div className="logoImage">
                <img src="./images/brand_logo.png" alt="Image Not Found" className="h-8 sm:h-10 md:h-auto" />
            </div>

            <div className="navItems hidden md:block">
                <ul className='flex flex-row items-center gap-3 lg:gap-6'>
                    <li className='cursor-pointer hover:text-red-600 duration-300 px-1 lg:px-2 text-sm lg:text-base'>MENU</li>
                    <li className='cursor-pointer hover:text-red-600 duration-300 px-1 lg:px-2 text-sm lg:text-base'>LOCATION</li>
                    <li className='cursor-pointer hover:text-red-600 duration-300 px-1 lg:px-2 text-sm lg:text-base'>ABOUT</li>
                    <li className='cursor-pointer hover:text-red-600 duration-300 px-1 lg:px-2 text-sm lg:text-base'>CONTACT</li>
                </ul>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
                <button type="button" className="text-gray-700 hover:text-red-600 duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            <div className="loginButton hidden md:block">
                <button type="button" id="loginBtn" className='bg-red-600 text-white active:bg-red-700 duration-300 px-3 md:px-4 py-2 rounded-lg shadow-lg text-sm md:text-base'>
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Navbar