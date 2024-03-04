import React from 'react'
import './home.scss'
import Sellersidebar from './Sellersidebar'
import Sellernavbar from './Sellernavbar'
import Featured from './Featured'
import Chart from './Chart'
import Widget from './Widget'



const Home = () => {
  return (
    <div className='home'>
      <Sellersidebar/>
      <div className="homeContainer">
        <Sellernavbar/> 
        <div className="widgets">
        <Widget type="user"/>
        <Widget type="order"/>
        <Widget type="earning"/>
        <Widget type="balance"/>
        </div>
        <div className="charts">
        <Featured/>
        <Chart title="Last Transactions" aspect={2/1}/>
        </div>
        
      </div>
    </div>
  )
}

export default Home
