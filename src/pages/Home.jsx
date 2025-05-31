import React from 'react'
import Sidebar from '../components/Sidebar'
import Userlist from '../components/Userlist'
import { useSelector } from 'react-redux'

const Home = () => {

    const data = useSelector((state) => state.logininformation.value)
    console.log(data)
    return (
        <>

            <div className='grid grid-cols-3 h-full gap-5'>

                <h2>{data.displayName}</h2>

                {/* <Userlist />
                <Userlist />
                <Userlist />
                <Userlist />
                <Userlist />
                <Userlist /> */}
            </div>
        </>
    )
}

export default Home