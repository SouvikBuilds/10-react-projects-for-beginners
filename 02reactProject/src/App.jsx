import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import ContactHeader from './Components/ContactHeader'
import Button from './Components/Button'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import ContactForm from './Components/ContactForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='mb-5 max-w-[1500px] m-auto'>
        <Navbar />
        <div className='h-[calc(100vh-72px)] mt-[10px]'>
          <ContactHeader />
          <Button mailText="VIA CHAT" callText="VIA CALL" isOutlineText="VIA EMAIL FORM" />
          <ContactForm />
        </div>
      </div>
    </>
  )
}

export default App
