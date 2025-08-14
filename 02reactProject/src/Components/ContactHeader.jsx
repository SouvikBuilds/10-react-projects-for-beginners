import React from 'react'

function ContactHeader() {
    return (
        <div className='flex flex-col flex-start gap-2 px-[188px] py-[93px] max-2-[1500px]'>
            <div className="contactHeading text-[48px] font-extrabold leading-[auto]">
                CONTACT US
            </div>

            <div className='contactText'>
                <p className='text-[16px] leading-[auto] font-semibold text-[gray]'>
                    LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR <br /> JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR <br /> SOCIAL MEDIA.
                </p>
            </div>
        </div>
    )
}

export default ContactHeader
