import React, { useContext } from 'react'
import "./sellersidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import TimelineIcon from '@mui/icons-material/Timeline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from 'react-router-dom';

import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import PreviewIcon from '@mui/icons-material/Preview';


const Sellersidebar = () => {

  

  return (
    <div className='sidebar'>
      <div className="top"><Link to="/seller/:id" style={{textDecoration:"none"}}>
        <span className="logo"><img className='logoofsidebar' src="https://i.ibb.co/GHKbxxD/black-white-nature-logo.png" /></span></Link></div>
<hr/>
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <Link to="/seller/:id" style={{textDecoration:"none"}}>
            <li>
                <DashboardIcon className='icon'/>
                <span>Dashboard</span>
            </li></Link>
            <p className="title">LISTS</p>
            
            <Link to="/profile/:id" style={{textDecoration:"none"}}>
            <li>
                
                <AccountCircleOutlinedIcon className='icon'/>
                <span>Profile</span>
            </li>
            </Link>
            <Link to="/products" style={{textDecoration:"none"}}>
            <li>
                < AddBusinessIcon className='icon'/>
                <span>Add Products</span>
            </li>
            </Link>
            <Link to="/sellerorder" style={{textDecoration:"none"}}>
            <li>
                
                <PersonOutlineOutlinedIcon className='icon'/>
                <span>Orders</span>
            </li>
            </Link>
            <li><Link to="/productlist/:id" style={{textDecoration:"none"}}>
            <PreviewIcon className='icon'/>
                <span>Products view</span></Link>
            </li>
           
{/*            
            <li>
                <AssessmentIcon className='icon'/>
               <span>stats</span>
            </li>
            <li> <NotificationsNoneIcon className='icon'/>
                <span>Notification</span>
            </li>
            <li>
                <LocalShippingIcon className='icon'/>              
                <span>Order</span>
            </li>
            <p className="title">SERVICE</p>
            
            <li>
                
                <TimelineIcon className='icon'/>
                <span>Logs</span>
            </li>
            <li>
                <SettingsOutlinedIcon className='icon'/>
                <span>Settings</span>
            </li>
            <p className="title">USER</p>
            <li>
            <CreditCardIcon className='icon'/>
                <span>Others</span>
            </li> */}
            <li><Link to="/sellerlogin" style={{textDecoration:"none"}}>
                <LogoutOutlinedIcon className='icon'/>
                <span>Logout</span></Link>
            </li>
        </ul>
      </div>
      
    </div>
  )
}

export default Sellersidebar
