'use client'
import React from "react"
import BottomNavbar from "./components/BottomNavbar"
import TopNavBar from "./components/TopNavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <TopNavBar/>
        <Router>
          <Routes>
            <Route path="/home">

            </Route>
          </Routes>
        </Router>
      <BottomNavbar/>
    </>
  )
}
