import React from 'react'
import './recentlyadd.scss'
import Productview from './Productview'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import './recentlyadd.scss'
import Sellersidebar from '../Sellerhome/Sellersidebar'
import Sellernavbar from '../Sellerhome/Sellernavbar'
const Recentlyadd = () => {
  return (
   <div className='addprodnew'>
     <Sellersidebar/>
      <div className="addprodnewContainer">
        <Sellernavbar/>
        <div className="addprodtop"> <Link to="/add" style={{textDecoration:"none"}} className='addprodlink'>
           <Button className='buttadd'>Add products</Button></Link>
        </div>
        <div className="addprodbottom"><h2 className='rece'>Recently Added</h2><br></br>
          <Productview/>
          
      </div>
    </div></div>
  )
}

export default Recentlyadd

