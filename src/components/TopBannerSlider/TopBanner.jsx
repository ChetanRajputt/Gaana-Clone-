import React from 'react'
import { Container } from '../Index'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const TopBanner = () => {

    // for top banner scrolling
    const banners = [
        "https://a10.gaanacdn.com/gn_img/showcase/g4w3vr3jJB/g4w3vzo3jJ/size_m_1689400586.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/kGxbnw0Ky4/GxbnwnlKy4/size_m_1539089092.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/01A3mar3NQ/1A3mg5ebNQ/size_m_1697624852.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/7rVW1Rbk56/rVW1j0gbk5/size_m_1657701429.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/BZgWoQOK2d/BZgWoX7b2d/size_m_1697203620.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/P7m3GNKqxo/7m3Gg0G3qx/size_m_1623930332.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/BZgWoOW2d9/ZgWonrr32d/size_m_1697699511.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/ZaP37RKDy7/aP371N1bDy/size_m_1697843392.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/zLp36PvbrG/Lp36Ja83rG/size_m_1543991859.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/XzVWRLKdqR/zVWRJ71Wdq/size_m_1697428184.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/D0PKLqr3Gl/0PKLA8J3Gl/size_m_1687345666.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/Rz4W87v3xD/z4W82r6KxD/size_m_1635316327.webp",
        "https://a10.gaanacdn.com/gn_img/showcase/d41WjnWPLq/d41WjwebPL/size_m_1697963924.webp"
    ]

    // for slider change the banner after clik the button is clicked

    function scrollLeft() {
        document.getElementById("banner").scrollLeft -= 600;
    }

    function scrollRight() {
        document.getElementById("banner").scrollLeft += 600;
    }

    // for change the banner automatically before the slider
    setInterval(() => {
        scrollRight()
    }, 5000);

    return (
        <div className='relative'>
            <Container>
                <div>
                    <button className='ml-12 p-1 bg-[#1B1B1B] rounded-full hidden md:inline absolute top-[50%] left-12 z-40  shadow-2xl text-gray-300 hover:text-white '>
                        <FaChevronLeft size={30} onClick={scrollLeft} />
                    </button>
                    <button className='mr-12 p-1 bg-[#1B1B1B] rounded-full hidden md:inline absolute top-[50%] right-12 z-40 shadow-2xl text-gray-300 hover:text-white '>
                        <FaChevronRight size={30} onClick={scrollRight} />
                    </button>
                </div>

                <div>
                    <div id='banner' className='slider flex items-center justify-center overflow-x-auto scroll-smooth p-4'>
                        {banners.map((img, index) => {
                            return (
                                <img src={img} key={index} className='h-[150px] md:h-[320px] opacity-85 hover:opacity-80  px-2 cursor-pointer' alt="" />
                            )
                        })
                        }
                    </div>
                </div >
            </Container >
        </div>
    )
}

export default TopBanner
