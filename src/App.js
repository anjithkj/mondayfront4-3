import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Flexslide from './Components/Userside/Userhome/Flexslide';
import Home from './Components/Sellerside/Sellerhome/Home';

import Usersignup from './Components/Userside/Userlogin/Usersignup';
import Footer from './Components/Userside/Userfooter/Footer';
import Midpart from './Components/Userside/Userfooter/Midpart';
import Cart from './Components/Userside/Userhome/Cart';
import CategoryFilter from './Components/Userside/Userfilter/CategoryFilter';
import CategoryPage from './Components/Userside/Userfilter/CategoryPage';
import Sellerlogin from './Components/Sellerside/Sellerlogin/Sellerlogin';
import Sellersignup from './Components/Sellerside/Sellerlogin/Sellersignup';
import Login from './Components/Userside/Userlogin/Login';
import Addproduct from './Components/Sellerside/Selleradd/Addproduct';

import Recentlyadd from './Components/Sellerside/Selleradd/Rcentlyadd';
import Productlist from './Components/Sellerside/Selleradd/Productlist';
import Adminlogin from './Components/Adminside/Adminlogin/Adminlogin';
import Admin from './Components/Adminside/Adminhome/Admin';
import Adminviewproduct from './Components/Adminside/Adminadd/Adminviewproduct';
import Addcategory from './Components/Adminside/Adminadd/Addcategory';

import Admincategoryview from './Components/Adminside/Adminadd/Admincategoryview';
import CategoryView from './Components/Adminside/Adminadd/Categoryview';
import Productview from './Components/Sellerside/Selleradd/Productview';
import Productedit from './Components/Sellerside/Selleradd/Productedit';
import Newsletter from './Components/Userside/Userfooter/Newsletter';
import Profile from './Components/Sellerside/Sellerprofile/Profile';
import Categoryedit from './Components/Adminside/Adminadd/Categoryedit';
import Aboutus from './Components/Userside/Userhome/Aboutus';
import Order from './Components/Userside/Userhome/Order';
import Incomingorder from './Components/Sellerside/Selleradd/Incomingorder';





function App() {
  // const [auth, setAuth] = useState(false);
  // const [sellerAuth, setSellerAuth] = useState(false);
  // const [loading, setLoading] = useState(true);
  
  // useEffect(() => {
  //   const checkToken = async () => {
  //     const token = localStorage.getItem("token");
  //     if (token) {
  //       try {
  //         const response = await axios.post(
  //           "http://localhost:5000/api/verifyToken",
  //           { token }
  //         );
  //         if (response.data.success) {
  //           const userType = localStorage.getItem("userType");
  //           if (userType === "user") {
  //             setAuth(true);
  //           } else if (userType === "seller") {
  //             setSellerAuth(true);
  //           }
  //         } else {
  //           setAuth(false);
  //           setSellerAuth(false);
  //         }
  //       } catch (error) {
  //         console.error("Token verification failed:", error);
  //         setAuth(false);
  //         setSellerAuth(false);
  //       }
  //     } else {
  //       setAuth(false);
  //       setSellerAuth(false);
  //     }
  //     setLoading(false);
  //   };

  //   checkToken();
  // }, []);

  // const handleLogout = () => {
  //   // Clear authentication state and token from local storage
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("userType");
  //   setAuth(false);
  //   setSellerAuth(false);
  // };

  // if (loading) {
  //   return <div>Loading...</div>; // Render a loading indicator while checking the token
  // }
  return (
  <div>
    {/* // <div className={darkMode ? 'App dark' : 'App'}> */}
      <BrowserRouter>
        <Routes>

          {/* userside */}
          
          <Route path='/userside' element={<Flexslide />} />
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Usersignup />} />
          <Route path='/email' element={<Newsletter method='post'/>} />
          <Route path='/footer' element={<Footer />} />
          <Route path='/mid' element={<Midpart />} />  
          <Route path='/cart' element={<Cart/>} />
          <Route path="/order" element={<Order />} />


          <Route path='/about' element={<Aboutus/>} />
          <Route path='/filter' element={<CategoryFilter />} />
          <Route path='/category/:category' element={<CategoryPage />} />
         

         {/* sellerside */}
         
          <Route path='/seller/:id' element={<Home />} />
          <Route path='/sellersignup' element={<Sellersignup />} />
          <Route path='/sellerlogin' element={<Sellerlogin />} />
          <Route path='/add' element={<Addproduct method='post' />} />
          <Route path='/pview/:id' element={<Productview method='get'/>} />
          <Route path='/productlist/:id' element={<Productlist />} />
          <Route path='/products' element={<Recentlyadd />} />
          <Route path='/profile/:id' element={<Profile method='get'/>} />
          <Route path='/sellerorder' element={<Incomingorder />} />

//admin

<Route path='/alogin' element={<Adminlogin />} />
<Route path='/admin' element={<Admin />} />
<Route path='/category' element={<Addcategory method='post'/>} />
<Route path='/viewcategory' element={<CategoryView method='get'/>} />
<Route path='/adminallproduct' element={<Adminviewproduct />} />   
<Route path='/cedit' element={<Categoryedit />} />
<Route path='/admincategoryall' element={<Admincategoryview/>} />       
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
