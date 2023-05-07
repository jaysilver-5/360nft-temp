"use client"
import Image from 'next/image';
import Logo from './logo.png';
import { BsFillMoonFill } from "react-icons/bs";
import { useState } from 'react'


export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState('/images/light.jpg');
  const [logo, setLogo] = useState('./logo_l.png');
  const [textColor, setTextColor] = useState('#413E53')


  return (
    <main className="items-center w-full min-h-screen bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <img src='./logo_d.png' alt=''/>
      <div className='px-32 py-10'>
        <nav className='flex justify-between items-center'>
          <div className='flex gap-x-2'>
            <img src={Logo.src} alt='logo' width={50} height={50} onClick={() => {
            }} />
            <h1 className='text-6xl font-primary text-[50px] font-extrabold' style={{ color: textColor }}>NFT</h1>
          </div>

          <div className='flex gap-x-10 justify-between items-center'>
            <button onClick={() => {
              // toggle background image and logo
              setBackgroundImage(backgroundImage === '/images/light.jpg' ? '/images/dark.jpg' : '/images/light.jpg')
              setLogo(logo === './logo_l.png' ? './logo_d.png' : './logo_l.png')
              setTextColor(textColor === '#413E53' ? '#fff' : '#413E53')
              }} className='rounded-[10px] font-primary font-semibold py-4 px-4 bg-[#D8D9DB]'>
              <BsFillMoonFill className='text-primary' />
            </button>
            <button className='rounded-[10px] px-4 py-2 hover:py-1 font-primary font-semibold bg-[#D8D9DB]'>Login</button>
            <button className='btn'>Sign Up</button>
          </div>
        </nav>


        <div className='flex flex-col gap-y-6'>
          <p className='mt-20 font-normal leading-2 text-[16px]' style={{ color: textColor }}>
            360NFT is currently invite-only
            <br/>Here's how to <span className='text-primary'>skip the waitlist now</span>
          </p>

          <h1 className='text-6xl font-primary text-[58px] font-extrabold' style={{ color: textColor }}>
            GET ON
            <br/>THE <span className='text-primary'>LIST</span>
          </h1>

          <p className='text-[35px] font-thin' style={{ color: textColor }}>
            Welcome friend,
            <br/>
            please log in
          </p>
        </div>
      </div>
      <footer className='sticky bottom-0 text-[14px] px-32 m-0 items-center mx-auto gap-x-10 flex justify-between' style={{ color: textColor }}>
          <p className=''style={{ color: textColor }}>© 2021 360NFT</p>
          <p className='text-[#808]'>Terms & conditions</p>
        </footer>
    </main>
  )
}


// public\images\logo_d.svg