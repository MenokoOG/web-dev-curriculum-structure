import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import AllGoals from './component/AllGoals'
import AddGoal from './component/AddGoal'
import Navbar from './component/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-goal' element={<AddGoal />} />
        <Route path='/all-goals' element={<AllGoals />} />
      </Routes>
    </>
  )
}

export default App
