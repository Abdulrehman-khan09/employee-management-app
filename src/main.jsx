import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AuthContext from './context/AuthContext.jsx'
import TaskContext from './context/TaskContext.jsx'

// localStorage.clear();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext> {/* kuch bhi pehle likh skte hai like authcontext bhi ya taskcontext bhi*/}
      <TaskContext> {/* kuch bhi pehle likh skte hai like authcontext bhi ya taskcontext bhi*/}
        <App />
      </TaskContext>
    </AuthContext>
  </StrictMode>,
)
