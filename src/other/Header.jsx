/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import { useState } from 'react'
import Login from '../components/Auth/Login'
import { AuthContext } from '../context/AuthProvider'

const Header = ({ data, changeUser }) => {



    const logOutUser = () => {
        localStorage.setItem("loggedInUser", "")
        // location.reload();
        changeUser("")
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-semibold'>Hello <br /><span className='text-3xl'>{data?.firstName ? data.firstName : 'admin'}  👋🏻</span> </h1>
            <button onClick={logOutUser} className='bg-red-600 rounded-3xl text-lg font-medium px-5 py-2 text-white'>Log out</button>
        </div>
    )
}

export default Header
