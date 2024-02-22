import React from 'react'
import { Header, Navbar } from '../Index'
import Queue from '../Queue/Queue'

const Navigation = () => {
    return (
        <div className='w-full sticky top-0 left-0 z-[99999] bg-[#1B1B1B] '>
            <Queue />
            <Header />
            <Navbar />
        </div>
    )
}

export default Navigation
