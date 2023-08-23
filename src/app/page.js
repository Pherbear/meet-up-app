import React from "react"
import BottomNavbar from "./components/BottomNavbar"
import TopNavBar from "./components/TopNavBar"

export default function Home() {
  return (
    <>
      <TopNavBar/>
      <div className='body'>
        body
      </div>
      <BottomNavbar/>
    </>
  )
}
