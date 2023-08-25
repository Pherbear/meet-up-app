'use client'
import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Link from 'next/link'
import { useRouter } from 'next/router'

import BottomNavbar from "./components/BottomNavbar"
import TopNavBar from "./components/TopNavBar"

export default function Home() {
  return (
    <>
      <TopNavBar/>
      <BottomNavbar/>
    </>
  )
}
