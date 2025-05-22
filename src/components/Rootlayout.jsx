import React from 'react'
import { Outlet } from 'react-router'
import Sidebar from './Sidebar'

const Rootlayout = () => {
    return (
        <main className='flex gap-3 p-5'>
            <Sidebar />
            <Outlet />
        </main>
    )
}

export default Rootlayout