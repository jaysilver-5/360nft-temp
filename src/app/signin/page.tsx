import React from 'react';
import { BsFacebook } from 'react-icons/bs'

interface Props {
    
}

const page = (props: Props) => {
    return (
        <div className='w-full bg-plain bg-cover h-screen'>
            <div className='flex justify-between'>
                <img src='/images/sign-in-banner.jpg' className='h-screen' />
                <div className='m-auto gap-y-6'>
                    <h1 className='text-6xl text-secondary font-primary text-[58px] font-extrabold'>
                        LOG IN 
                        <br/> <span className='text-[#00BBFF]'>360</span> NFT
                    </h1>
                    {/* buttons */}
                    <div className='mt-10 flex justify-start'>
                        <button className='rounded-[10px] bg-[#4285F4] p-3'> 
                            <div className='flex gap-x-2'>
                                <img src='/images/metamask.svg' width={20}/>
                                <p className='text-white'>Log in with metamask</p>
                            </div>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
