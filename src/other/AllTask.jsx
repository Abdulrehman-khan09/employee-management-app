/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

    const authData = useContext(AuthContext)
    // console.log(authData);

    return (
        <div className='bg-[#1c1c1c] rounded h-72  p-5 mt-5'>

            <div className='bg-blue-900 mb-2 py-2 px-4 flex justify-between rounded-lg'>
                <h2 className='w-1/5'>Employee Name</h2>
                <h3 className='w-1/5'>New Task</h3>
                <h5 className='w-1/5'>Active Task</h5>
                <h5 className='w-1/5'>Completed</h5>
                <h5 className='w-1/5'>Failed</h5>
            </div>
            <div className='overflow-auto h-[80%]'>
                {authData.employees.map((element) => {

                    return (<div className='bg-sky-600 mb-2 py-2 px-4 flex justify-between rounded-lg'>
                        <h2 className='w-1/5'>{element.firstName}</h2>
                        <h3 className=' w-1/5'>{element.taskCounts.newTask}</h3>
                        <h5 className='w-1/5'>{element.taskCounts.active}</h5>
                        <h5 className='w-1/5'>{element.taskCounts.completed}</h5>
                        <h5 className='w-1/5'>{element.taskCounts.failed}</h5>
                    </div>)

                })}
            </div>
        </div>
    )
}

export default AllTask
