import React from "react"
import './App.css'
import WhiteLogo from '../src/assets/LogoWhite.webp'
function App() {
  return (
    <>
      
    <div className="main-div" >

      <div className="white-logo-div">
        <div className="white-logo-contants">
        <img src={WhiteLogo} alt="" className="white-logo-img" />
        <h3>CHARTBY</h3>
        <h6>TRADING JOURNAL</h6>
        </div>
      </div>

      <div className="soon-text-div" >
        <div className="soon-text">
        <h1>LAUNCHING SOON</h1>
        </div>
      </div>

    </div>
    
    </>
  )
}

export default App
