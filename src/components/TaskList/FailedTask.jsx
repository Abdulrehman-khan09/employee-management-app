/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const FailedTask = ({ element }) => {
    return (
        <div className='h-full flex-shrink-0 rounded-2xl p-5 w-[300px] bg-blue-400'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 bg-red-500 rounded-lg'>{element.category}</h3>
                <h4>{element.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{element.taskTitle}</h2>
            <p className='mt-2 text-sm'>{element.taskDescription}</p>
            <div className='mt-5'>
                <button className='w-full'>Failed</button>
            </div>
        </div>
    )
}

export default FailedTask
