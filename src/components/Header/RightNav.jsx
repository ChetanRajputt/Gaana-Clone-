import React from 'react'
import { CiLight } from "react-icons/ci";
import { FaLanguage } from "react-icons/fa";
import Button from '../Button';

const RightNav = () => {
    return (
        <div className='hidden items-center gap-6 lg:flex'>
            <div className='flex items-center gap-4'>
                {/* custom component for  button design  */}
                <Button
                    bgColor='bg-orange-600'
                    hoverColor=''
                >
                    Welcome Offer: 1 Month Trial @ 1
                </Button>
                <Button
                    bgColor='bg-white'
                    hoverColor='hover:bg-gray-200'
                    textColor='text-black'
                >
                    Get Gaana Plus
                </Button>
            </div>
            <div className='flex items-center gap-4'>
                <div className='flex items-center gap-4 '>
                    <button><FaLanguage size={30} /></button>
                    <button><CiLight size={25} /></button>
                </div>
                <div>
                    <button className='w-[75px] overflow-hidden text-sm lg:text-[10px]'>Log In / Sign Up</button>
                </div>
            </div>
        </div>
    )
}

export default RightNav
