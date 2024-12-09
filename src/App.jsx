/* eslint-disable no-unused-vars */
import './App.css'
import React, { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState("")
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)
  // console.log(authData);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // }, [authData])


  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser", "")
    if (loggedInUser) {

      console.log("user logged in");
    }


  }, [])

  const handleLogin = (email, password) => {
    if (authData && authData.admin.find((e) => email == e.email && password == e.password)) {
      setUser("admin");
      // console.log(user);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: "admin" }))

    }
    else if (authData) {
      const employee = authData.employees.find((e) => email == e.email && password == e.password)
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee)
        // console.log(user);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: "employee" }))
      }
    }
    else {
      alert("invalid")
    }


  }


  return (
    <div>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : (user == "employee" ? <EmployeeDashboard data={loggedInUserData} /> : null)}

    </div>
  )
}

export default App