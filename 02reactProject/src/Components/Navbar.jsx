import React from 'react'

function Navbar() {
    return (
        <nav className="navbar flex items-center justify-between w-[1440px] h-[72px] px-[100px] max-w-[1500px]">
            <div className="logo">
                <img src="./images/Frame 2 1.png" alt="Image Not Found" className='h-[72px] w-[72px]' />
            </div>

            <div className="navItems">
                <ul className='flex items-center gap-6'>
                    <li className='w-[50px] h-[24px] font-semibold cursor-pointer hover:text-red-500 duration-300'>Home</li>
                    <li className='w-[50px] h-[24px] font-semibold cursor-pointer hover:text-red-500 duration-300'>About</li>
                    <li className='w-[50px] h-[24px] font-semibold cursor-pointer hover:text-red-500 duration-300'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
