import React from 'react'
import Sidebar from '../components/Sidebar'
import Userlist from '../components/Userlist'

const Home = () => {
    return (
        <div className='grid grid-cols-3 h-full gap-5'>
            <Userlist />
            <Userlist />
            <Userlist />
            <Userlist />
            <Userlist />
            <Userlist />
        </div>
    )
}

export default Home