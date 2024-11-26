/* eslint-disable no-unused-vars */
import './App.css'
import React, { useEffect } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'


const App = () => {

  useEffect(() => {
    // setLocalStorage()
    getLocalStorage()
  }, [])

  return (
    <div>
      <Login />
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App
