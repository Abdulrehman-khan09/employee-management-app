/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import Header from '../../other/Header'
import TaskListNumbers from '../../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'


const EmployeeDashboard = ({ data, changeUser }) => {
    // console.log(changeUser);


    return (
        <div className='p-10 bg-[#1C1C1C] h-screen'>

            <Header data={data} changeUser={changeUser} />
            <TaskListNumbers data={data} changeUser={changeUser} />
            <TaskList data={data} changeUser={changeUser} />
        </div>
    )
}

export default EmployeeDashboard
