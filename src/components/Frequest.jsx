import React, { useEffect, useState } from 'react'
import { getDatabase, ref, onValue } from "firebase/database";
import { auth } from '../../firebase.config';
import { IoPersonAddOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import Creative from '/src/assets/creative.png'



const Frequest = () => {

    const [requestList, setRequestList] = useState([])
    const db = getDatabase();

    useEffect(() => {
        const requestlistRef = ref(db, 'frequestlist/');
        onValue(requestlistRef, (snapshot) => {
            const array = []
            snapshot.forEach((item) => {
                let array = []
                array.push(item.val())
            })
            setRequestList(array)
        });
    }, [])
    console.log(requestList)



    return (
        <>
            {/* component */}
            {/* This is an example component */}
            <div className="">
                <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                            Friend Request List
                        </h3>

                        <a
                            href="#"
                            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                        >
                            View all
                        </a>

                    </div>
                    <div className="flow-root">
                        <ul
                            role="list"
                            className="divide-y divide-gray-200 dark:divide-gray-700 h-[400px] overflow-y-scroll pr-10"
                        >
                            {requestList.map(() => (
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src={Creative}
                                                // src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
                                                alt="Neil image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                {item.sendername}
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                dfs
                                            </p>
                                        </div>

                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            <FaUserFriends className='text-2xl' />
                                        </div>

                                    </div>
                                </li>
                            ))}



                        </ul>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Frequest