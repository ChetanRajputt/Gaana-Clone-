import React from 'react'
import { Container, TopBanner, RecentlyPlayed, SongBoxContainer } from '../components/Index'

const Home = () => {
    return (
        <div>
            <TopBanner />
            <Container>
                <RecentlyPlayed />
                <SongBoxContainer />
            </Container>
        </div>
    )
}

export default Home
