/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const submitHandler = (e) => {
        e.preventDefault()
        console.log(email);
        console.log(password);

        setEmail("")
        setPassword("")
    }

    return (
        <div
            className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl p-20 border-emerald-600'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center' action="">
                    <input
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className='border-2 mt-9 border-emerald-600 bg-transparent outline-none placeholder:text-white text-xl py-3 px-4 rounded-full' type="email" placeholder='Enter your email' />
                    <input
                        required
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        className='border-2 mt-9 border-emerald-600 bg-transparent outline-none placeholder:text-white text-xl py-3 px-4 rounded-full' type="password" placeholder='Enter your password' />
                    <button className='border-2 mt-9 bg-emerald-600 border-none outline-none text-xl pt-3 pb-3 pl-10 pr-10 rounded-full'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
