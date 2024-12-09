/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const CompleteTask = ({ element }) => {
    return (
        <div className='h-full flex-shrink-0 rounded-2xl p-5 w-[300px] bg-green-400'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 bg-red-500 rounded-lg'>{element.category}</h3>
                <h4>{element.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold'>{element.taskTitle}</h2>
            <p className='mt-2 text-sm'>{element.taskDescription}</p>
            <div className='mt-5'>
                <button className='bg-green-500 rounded-lg py-1 px-2 w-full'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteTask
