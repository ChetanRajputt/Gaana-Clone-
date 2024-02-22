import React, { useState } from 'react'
import { BiMenu } from "react-icons/bi";
import { AiOutlineSearch } from 'react-icons/ai';
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom';
import SearchBar from '../Search/SearchBar';

const LeftNav = () => {

    const [openSearch, setOpenSearch] = useState(false);

    return (
        <div className=' flex flex-col md:flex-row md:items-center md:gap-8'>
            <div className='flex mx-2 md:mx-0 justify-between md:justify-normal items-center gap-6'>
                <div className='cursor-pointer'><BiMenu size={25} /></div>
                <div className='mb-1'><Link to={"/"}>
                    <img className='w-[90px] hover:opacity-80 duration-300 cursor-pointer' src={logo} alt="Gaana Logo" /> </Link></div>
            </div>

            <div onClick={() => setOpenSearch(!openSearch)} className='mt-2 md:mt-0 h-[35px] flex items-center bg-black rounded-full py-[9px] px-3 w-[320px] sm:w-[380px]  md:w-[480px] lg:w-[480px]
             border border-gray-700 gap-2 text-gray-400'>
                <AiOutlineSearch />
                <p className='text-sm' >Search Artists, Songs, Albums</p>
            </div>
            <div>
                {openSearch && <SearchBar setOpenSearch={setOpenSearch} openSearch={openSearch} />}
            </div>
        </div>
    )
}

export default LeftNav
