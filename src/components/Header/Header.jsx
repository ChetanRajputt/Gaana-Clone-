import React from 'react'
import RightNav from './RightNav';
import LeftNav from './LeftNav';

function Header() {
    return (
        <header className='w-full h-[100px] md:h-[60px] flex justify-center items-center bg-[#222428] text-white md:justify-between px-5 md:px-12'>
            {/* left part */}
            <LeftNav />

            {/* right part */}
            <RightNav />

        </header>
    )
}

export default Header
