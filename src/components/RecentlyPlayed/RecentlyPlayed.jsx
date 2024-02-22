import React from 'react'
import RecentCard from './RecentCard'
import songsData from "../../api/songsData.json";


function RecentlyPlayed() {

    // for set the current song index to click on the recently played song
    let recentPlayed = [];

    recentPlayed = songsData.slice(30, 36)


    return (
        <div className='text-white hidden sm:block md:block my-8'>
            <div className='flex justify-between'>
                <h1 className='text-2xl font-bold'>Recently Played</h1>
                <button className="text-[12px] text-red-500 hover:text-red-800">See All</button>
            </div>

            <div className='w-full flex gap-6 my-4 flex-wrap '>
                {
                    recentPlayed.map((music, index) => {
                        const { images, name, id, from } = music;
                        return (
                            <RecentCard key={index}
                                images={images}
                                name={name}
                                id={id}
                                from={from}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default RecentlyPlayed
