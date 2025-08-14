import { text } from 'animejs';
import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

function Button({ mailText, callText, isOutlineText }) {

    const onViaCallSubmit = () => {
        console.log("Someone is Calling")
    }

    const onViaEmailSubmit = () => {
        console.log("Someone is Messaging Through Email")
    }

    const onViaChatSubmit = () => {
        console.log("Someone is Messaging through Chat")
    }


    return (
        <>

            <div className='flex items-center flex-row gap-6 px-[183px] mt-[10px] max-2-[1500px]'>
                <button type="button" onClick={onViaChatSubmit} className='flex items-center justify-center text-white bg-black w-[220px] h-[44px] px-[30px] py-[10px] rounded-lg shadow-lg active:bg-[gray] duration-300'>
                    <CiMail className='text-[24px]' />
                    <p className='text-[16px]  font-semibold w-[152px]' >
                        {mailText}
                    </p>
                </button>
                <button type="button" onClick={onViaCallSubmit} className='flex items-center justify-center text-white bg-black w-[220px] h-[44px] px-[30px] py-[10px] rounded-lg shadow-lg active:bg-[gray] duration-300'>
                    <IoCallOutline className='text-[24px]' />
                    <p className='text-[16px]  font-semibold w-[152px] h-[24px]' >
                        {callText}
                    </p>
                </button>
            </div>

            <button type="button" onClick={onViaEmailSubmit} className='flex items-center justify-center text-black bg-white  h-[44px] px-[30px] py-[10px] rounded-lg mt-[30px] shadow-lg active:bg-[gray] duration-300 ml-[183px] w-[472px] '>
                <MdOutlineMessage className='text-[24px]' />
                <p className='text-[16px]  font-semibold w-[152px] h-[24px]' >
                    {isOutlineText}
                </p>
            </button>
        </>
    )
}

export default Button
