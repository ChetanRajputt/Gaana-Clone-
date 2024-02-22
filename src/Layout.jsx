import React from 'react'
import { Navigation, Footer, MasterPlay } from './components/Index';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navigation />
            <Outlet />
            <MasterPlay />
            <Footer />
        </>
    )
}

export default Layout
