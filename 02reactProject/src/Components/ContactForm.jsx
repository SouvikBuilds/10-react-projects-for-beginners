import React, { useState } from 'react'

function ContactForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [allUsers, setAllUsers] = useState(
        JSON.parse(localStorage.getItem('allUsers')) || []
    )

    const savedUsers = (updatedUsers) => {
        localStorage.setItem('allUsers', JSON.stringify(updatedUsers))
    }

    const allUserMessaged = () => {
        if (!name.trim() || !email.trim() || !message.trim()) {
            alert("Some details are empty, please check before submitting")
            return
        }

        const userDetails = {
            UserId: Date.now(),
            Name: name.trim(),
            Email: email.trim(),
            Message: message.trim()
        }

        const updatedUsers = [...allUsers, userDetails]
        setAllUsers(updatedUsers)
        savedUsers(updatedUsers)

        alert("Message saved successfully!")

        // Clear form
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className='ml-[183px] mt-5 flex flex-row items-center gap-[81px] max-w-[1500px]'>
            <form className="formGroup flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
                <div className='flex flex-col'>
                    <label htmlFor="inputName" className='ml-[20px] cursor-pointer'>Name:</label>
                    <input
                        type="text"
                        id="inputName"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='px-4 py-2 border border-[#333] w-[440px] h-[40px]'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="inputMail" className='ml-[20px] cursor-pointer'>E-mail:</label>
                    <input
                        type="email"
                        id="inputMail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='px-4 py-2 border border-[#333] w-[440px] h-[40px]'
                    />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="inputText" className='ml-[20px] cursor-pointer'>Text:</label>
                    <textarea
                        id="inputText"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className='px-4 py-2 border border-[#333] w-[440px] h-[120px]'
                        rows={6}
                    />
                </div>
                <div className="btn flex-end">
                    <button
                        type="button"
                        onClick={allUserMessaged}
                        className='flex items-end text-end text-white bg-black w-[220px] h-[44px] px-[30px] py-[10px] rounded-lg shadow-lg active:bg-[gray] duration-300'
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
            <img src="./images/contactImg.svg" alt="Not Found" className='mt-[-270px]' />
        </div>
    )
}

export default ContactForm
