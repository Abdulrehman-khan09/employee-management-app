/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const CreateTask = () => {
    const [taskTitle, setTaskTitle] = useState("")
    const [taskDescription, setTaskDescription] = useState("")
    const [taskDate, setTaskDate] = useState("")
    const [assignTo, setAssignTo] = useState("")
    const [category, setCategory] = useState("")

    const [newTask, setNewTask] = useState({})

    const [userData, setUserData] = useContext(AuthContext)


    const submitHandler = (e) => {
        e.preventDefault()
        // console.log(("task created"));


        setNewTask({
            taskTitle,
            taskDate,
            category,
            taskDescription,
            active: false,
            newTask: true,
            failed: false,
            completed: false
        });


        const data = userData
        // console.log(data);

        data.forEach((element) => {
            // console.log(element.firstName);

            if (assignTo == element.firstName) {
                // console.log(element.tasks);

                element.tasks.push(newTask)
                // console.log(element.tasks);
                element.taskCounts.newTask = element.taskCounts.newTask + 1
            }
        });

        setUserData(data)
        console.log(data);

        setTaskTitle("")
        setTaskDescription("")
        setTaskDate("")
        setAssignTo("")
        setCategory("")
    }


    return (
        <div>
            <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className='flex flex-wrap w-full items-start justify-between'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => {
                                    setTaskTitle(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => {
                                    setTaskDate(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign To :</h3>
                            <input
                                value={assignTo}
                                onChange={(e) => {
                                    setAssignTo(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                        </div>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input
                                value={category}
                                onChange={(e) => {
                                    setCategory(e.target.value)
                                }}
                                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                        </div>
                    </div>

                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }}
                            className='text-sm py-1 h-44 px-4 w-full rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols={30} rows={10}></textarea>
                        <button className='w-full mt-4 px-5 rounded-xl bg-emerald-500 py-3 hover:bg-emerald-600'>Create Task</button>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default CreateTask
