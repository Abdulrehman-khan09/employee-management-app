import React from 'react'

const TaskList = () => {
    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto justify-start items-center gap-5 flex-nowrap flex mt-10 py-4  w-full '>
            <div className='h-full flex-shrink-0 rounded-2xl p-5 w-[300px] bg-red-400'>
                <div className='flex justify-between items-center'>
                    <h3 className='px-3 py-1 bg-red-500 rounded-lg'>High</h3>
                    <h4>24 Nov 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti quisquam dolorem sint commodi veritatis.</p>
            </div>
            <div className='h-full flex-shrink-0 rounded-2xl p-5 w-[300px] bg-purple-400'>
                <div className='flex justify-between items-center'>
                    <h3 className='px-3 py-1 bg-red-500 rounded-lg'>High</h3>
                    <h4>24 Nov 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti quisquam dolorem sint commodi veritatis.</p>
            </div>
            <div className='h-full flex-shrink-0 rounded-2xl p-5 w-[300px] bg-green-400'>
                <div className='flex justify-between items-center'>
                    <h3 className='px-3 py-1 bg-red-500 rounded-lg'>High</h3>
                    <h4>24 Nov 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti quisquam dolorem sint commodi veritatis.</p>
            </div>
            <div className='h-full flex-shrink-0 rounded-2xl p-5 w-[300px] bg-blue-400'>
                <div className='flex justify-between items-center'>
                    <h3 className='px-3 py-1 bg-red-500 rounded-lg'>High</h3>
                    <h4>24 Nov 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti quisquam dolorem sint commodi veritatis.</p>
            </div>
            <div className='h-full flex-shrink-0 rounded-2xl p-5 w-[300px] bg-yellow-300'>
                <div className='flex justify-between items-center'>
                    <h3 className='px-3 py-1 bg-red-500 rounded-lg'>High</h3>
                    <h4>24 Nov 2024</h4>
                </div>
                <h2 className='mt-5 text-xl font-semibold'>Make a youtube video</h2>
                <p className='mt-2 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, corrupti quisquam dolorem sint commodi veritatis.</p>
            </div>
        </div>
    )
}

export default TaskList
