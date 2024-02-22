import React from 'react'
import { Container } from '../Index'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <div className='w-full text-white bg-[#282B2F]'>
            <div>
                <Container>
                    <div className=' py-4  flex flex-col items-center justify-center'>
                        <h2 className='my-4 text-2xl lg:text-4xl font-bold'>Bas Bajna Chahiye Gaana</h2>
                        <p className='text-[10px] lg:text-sm text-gray-400'>Gaana is the one-stop solution for all your music needs. Gaana offers you free, unlimited access to over 30 <br />million Hindi Songs, Bollywood Music, English MP3 songs, Regional Music & Mirchi Play.</p>
                    </div>
                    <div className='w-full h-[1px] bg-gray-600'></div>
                    <div className='py-4 flex gap-5 justify-center'>
                        <SocialIcon className='hover:bg-gray-300 rounded-3xl duration-200' url="https://facebook.com" />
                        <SocialIcon className='hover:bg-gray-300 rounded-3xl duration-200' url="https://twitter.com" />
                    </div>
                    <div className='w-full h-[1px] bg-gray-600'></div>
                    <ul className='py-4 text-sm lg:text-base flex flex-col lg:flex-row gap-5 justify-center'>
                        <li className='hover:text-gray-400 duration-200 cursor-pointer'> Advertise on Gaana.com</li>
                        <li className='hover:text-gray-400 duration-200 cursor-pointer'> Terms of Use</li>
                        <li className='hover:text-gray-400 duration-200 cursor-pointer'> Privacy Policy</li>
                        <li className='hover:text-gray-400 duration-200 cursor-pointer'> Partners</li>
                        <li className='hover:text-gray-400 duration-200 cursor-pointer'> Sitemap</li>
                        <li className='hover:text-gray-400 duration-200 cursor-pointer'> FAQ</li>
                    </ul>
                    <div className='w-full h-[1px] bg-gray-600'></div>
                    <div className='py-4 flex gap-5 justify-center'>
                        <p className='text-gray-400'>&copy; Gamma Gaana Ltd. 2023, All Rights Reserved</p>
                    </div>
                    <div className='py-10'></div>
                </Container>
            </div>
        </div>
    )
}

export default Footer
