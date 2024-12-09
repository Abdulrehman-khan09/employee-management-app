/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
    // console.log(authData);

    return (
        <div className='bg-[#1c1c1c] rounded h-72  p-5 mt-5'>

            <div className='bg-purple-900 mb-2 py-2 px-4 flex justify-between rounded-lg'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active Task</h5>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>
            </div>
            <div className='overflow-auto h-[80%]'>
                {authData.employees.map((element) => {

                    return (<div className='bg-purple-500 mb-2 py-2 px-4 flex justify-between rounded-lg'>
                        <h2 className='w-1/5'><span className=' p-1 rounded-md'>{element.firstName}</span></h2>
                        <h3 className=' w-1/5'><span className='bg-sky-600  p-1 rounded-md'>Task</span></h3>
                        <h5 className='w-1/5'><span className='bg-yellow-400  text-black p-1 rounded-md'>Status</span></h5>
                        <h5 className='w-1/5'><span className='bg-green-600 p-1 rounded-md'>Status</span></h5>
                        <h5 className='w-1/5'><span className='bg-red-500 p-1 rounded-md'>Failed</span></h5>
                    </div>)

                })}
            </div>
        </div>
    )
}

export default AllTask
