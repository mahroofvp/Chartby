import React from "react"
import './App.css'

import PageOne from "./pages/PageOne"
import PageTwo from "./pages/PageTwo"
import { Route, Routes } from "react-router-dom"
import Navigation from "./components/Navigation"
// import WhiteLogo from '../src/assets/LogoWhite.webp'
function App() {
  return (
    <>
      
      <Navigation/>
    


      {/* <div className="white-logo-div">
        <div className="white-logo-contants">
        <img src={''} alt="" className="white-logo-img" />
        <h3>CHARTBY</h3>
        <h6>TRADING JOURNAL</h6>
        </div>
      </div> */}
      <Routes>
      <Route path='/' element={<PageOne/>}  />
      <Route path='/pageTwo' element={<PageTwo/>}  />
      </Routes>
      

 
    
    </>
  )
}

export default App
