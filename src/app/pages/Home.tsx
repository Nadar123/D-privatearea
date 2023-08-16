import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Layout/Header/NavBar.component'

function Home() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Home
