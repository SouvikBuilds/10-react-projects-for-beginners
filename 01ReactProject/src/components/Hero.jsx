import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center min-h-[calc(100vh-72px)] gap-4 max-w-[1500px] m-auto px-4 sm:px-6 md:px-8 py-8 lg:py-0'>
            <div className='flex flex-col items-start gap-4 w-full lg:w-auto'>
                <div className="heading">
                    <h1 className='text-4xl sm:text-5xl md:text-7xl lg:text-[108px] leading-tight sm:leading-[48px] md:leading-[68px] lg:leading-[102px] font-extrabold text-left lg:text-justify'>
                        YOUR FEET <br />
                        <span className='ml-0 sm:ml-[6px] md:ml-[8px] lg:ml-[12px]'>DESERVE</span> <br />
                        THE BEST
                    </h1>
                </div>
                <div className="content">
                    <p className='text-[#989797] text-sm md:text-[16px] leading-[auto] ml-0 sm:ml-[10px] md:ml-[15px] lg:ml-[20px] max-w-lg lg:max-w-none'>
                        YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br className="hidden lg:block" />
                        HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br className="hidden lg:block" />
                        THE BEST AND WE'RE HERE TO HELP YOU WITH OUR <br className="hidden lg:block" />
                        SHOES
                    </p>
                </div>
                <div className="buttons flex flex-col sm:flex-row items-start sm:items-center gap-3 ml-0 sm:ml-[10px] md:ml-[15px] lg:ml-[20px] w-full sm:w-auto">
                    <button type="button" className='w-full sm:w-auto px-4 py-2 rounded-lg shadow-lg bg-red-600 text-white active:bg-red-700 duration-300 text-sm md:text-base'>Shop Now</button>
                    <button type="button" className='w-full sm:w-auto px-4 py-2 rounded-lg shadow-lg bg-red-600 text-white active:bg-red-700 duration-300 text-sm md:text-base'>Category</button>
                </div>

                <div className='flex flex-col items-start ml-0 sm:ml-[10px] md:ml-[15px] lg:ml-[20px] w-full'>
                    <p className='text-sm md:text-[16px] leading-[auto] font-normal text-[#989797]'>Also Available On</p>

                    <div className="icons flex flex-row items-center gap-4 mt-5">
                        <img src="./images/flipkart.png" alt="Not Found" className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-auto md:h-auto' />
                        <img src="./images/amazon.png" alt="Not Found" className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 md:w-auto md:h-auto' />
                    </div>
                </div>
            </div>
            <div className="heroImage mt-8 lg:mt-0 w-full lg:w-auto flex justify-center">
                <img src="./images/shoe_image.png" alt="Shoe Image" className="max-w-full h-auto max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-none" />
            </div>
        </div>
    )
}

export default Hero