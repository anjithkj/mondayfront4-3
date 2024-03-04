import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation
import Flexdraw from './Flexdraw';
import './cart.scss';
import Footer from '../Userfooter/Footer';
import axios from 'axios';
import baseUrl from '../../../Api';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const location = useLocation(); // Using useLocation here
  const newCartItem = location.state;

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(baseUrl + '/cart/viewcart');
      setCartItems(response.data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await axios.delete(`${baseUrl}/cart/remove/${id}`);
      fetchCartItems();
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.productPrice * item.productQuantity || 0), 0);
  };

  const proceedToPayment = () => {
    alert('Ordering...');
    // You can add code here to handle payment processing
  };

  return (
    <div className="midall">
      <Flexdraw />
      <br />
      <h2 className="hd">Cart</h2>
      {cartItems.length === 0 ? (
        <p className='nocart'>No items in the cart...!</p>
      ) : (
        <div className="cart-box">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/products/${item._id}`}>
                      {item.productName}
                    </Link>
                  </td>
                  <td>{item.productPrice}</td>
                  <td>{item.productQuantity}</td>
                  <td>{item.productDescription}</td>
                  <td>
                    <button className='removebutton' onClick={() => removeFromCart(item._id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="total-amount">
        Total Amount: ${calculateTotalAmount()}
      </div>
      <Link to={{ pathname: '/order', state: { cartItems } }}>
      <button className="proceed-button" onClick={proceedToPayment}>
        Proceed to Order
      </button></Link>
      <div className="homefooterbottom"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Cart;
