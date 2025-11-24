import React from 'react'
import chartbyLogo from '../assets/Logo_Dark_Blackbg.png'
import'./pageOne.css'
import PageOneSecondHalf from '../components/PageOneSecondHalf'
const PageOne = () => {
  return (
    <div className='dead-div'>

        <div className="main-div" >

         <div className="soon-text-div" >
        <div className="soon-text-container">
        <div className="logo-img-div">
      <img src={chartbyLogo} alt="" />
        </div>
        <div className="soon-text">
        <h1>Engineers at Work. Stay Tuned, Trader!</h1>
        </div>
        </div>
      </div>
        </div>
      <div>
        <PageOneSecondHalf/>
      </div>
    </div>
        

  )
}

export default PageOne