import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Components/Login/Login'
import AboutUs from './Components/AboutUs/AboutUs'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import { useAuth0 } from '@auth0/auth0-react'


function App() {

  const { isAuthenticated } = useAuth0()

  // console.log(isAuthenticated)
  return (
    <BrowserRouter>
      {
        isAuthenticated ? (
          <div className='app'>
            <Header />
            <div className='app_body'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/profile' element={<h1>Profile Page</h1>} />
              </Routes>
            </div>
            {/* 
      
        <div className='app_body'>
          <AboutUs />
        </div>

        <Login /> */}

          </div>
        ) : (
          <Login />
        )
      }

    </BrowserRouter>
  )
}

export default App