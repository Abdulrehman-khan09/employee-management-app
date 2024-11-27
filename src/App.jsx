/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState, useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'


const App = () => {

  const [user, setUser] = useState("")

  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == '123') {
      setUser("admin");
      // console.log(user);

    } else if (email == "user@me.com" && password == '123') {
      setUser("employee");
      // console.log(user);

    } else {
      alert("invalid")
    }


  }


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "employee" ? <EmployeeDashboard /> : <AdminDashboard />}

    </div>
  )
}

export default App
