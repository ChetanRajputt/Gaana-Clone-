import React from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../container/Container'

const Navbar = () => {

    // const navigate = useNavigate()

    // for navigation links and slug
    const navItems = [
        {
            name: 'All',
            slug: '/',
            // active: true
        },
        {
            name: 'Trending Songs',
            slug: '/trending-songs',
        },
        {
            name: 'New Songs',
            slug: '/new-songs',
        },
        {
            name: 'Old Songs',
            slug: '/old-songs',
        },
        {
            name: 'Moods & Genres',
            slug: '/moods',
        },
        {
            name: 'Albums',
            slug: '/albums',
        },
        {
            name: 'Radio',
            slug: '/radio',
        },
        {
            name: 'Podcast',
            slug: '/podcast',
        },
        {
            name: 'My Music',
            slug: '/my-music',
        }
    ]

    return (
        <nav className='md:h-[40px] w-full '>
            <Container>
                <ul className='flex overflow-x-auto  md:overflow-auto justify-start text-white my-4'>
                    {
                        navItems.map((item, index) => {
                            return <li key={index} className='pr-8 text-[10px] md:text-base hover:underline underline-offset-2  text-gray-200 cursor-pointer'>{item.name}</li>;
                        })
                    }
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar
