import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import ApplyJob from './pages/ApplyJob'
import Applications from './pages/Applications'
import Login from './pages/Login';
import RecruiterLogin from './pages/RecruiterLogin';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recruiter-login" element={<RecruiterLogin />} />
        </Routes>
    </div>
  )
}

export default App
