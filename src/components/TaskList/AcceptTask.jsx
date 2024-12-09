/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const AcceptTask = ({ element }) => {
    // console.log(element);

    return (

        <div className='flex-shrink-0 h-full w-[325px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='px-3 py-1 bg-red-500 rounded-lg'>{element.category}</h3>
                <h4>{element.taskDate}</h4>
            </div>

            <h2 className='mt-5 text-xl font-semibold'>{element.taskTitle}</h2>
            <p className='mt-2 text-sm'>{element.taskDescription}</p>
            <div className='flex justify-between mt-6'>
                <button className='bg-green-500 rounded-lg py-1 px-2 text-sm'>Mark as Completed</button>
                <button className='bg-red-500 rounded-lg py-1 px-2 text-sm'>Mark as Failed</button>

            </div>
        </div>

    )
}

export default AcceptTask
