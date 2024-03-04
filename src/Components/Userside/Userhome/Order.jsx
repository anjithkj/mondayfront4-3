import React, { useState, useEffect } from 'react';
import axios from 'axios';
import baseUrl from '../../../Api';
import Footer from '../Userfooter/Footer';
import { Link } from 'react-router-dom';
import Flexdraw from './Flexdraw';

const Order = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(baseUrl + '/ordered/vieworder');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const sendToSellerProfile = async (item) => {
    try {
      await axios.post(baseUrl + '/sellerview/orderseller', item); // Sending the order details in the request body
      console.log('Sending order to seller:', item);
      // Assuming you want to navigate to another page after sending to seller
    } catch (error) {
      console.error('Error sending order to seller:', error);
    }
  };

  return (
    <div className="midall">
      <Flexdraw />
      <br />
      <h2 className="hd">Orders</h2>
      {orders.length === 0 ? (
        <p className='nocart'>No items in the orders...!</p>
      ) : (
        <div className="cart-box">
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/products/${item.productId}`}>
                      {item.productName}
                    </Link>
                  </td>
                  <td>{item.productPrice}</td>
                  <td>{item.productQuantity}</td>
                  <td>{item.productDescription}</td>
                  <td>{item.status}</td>
                  <td>
                    <button className="send-to-seller-button" onClick={() => sendToSellerProfile(item)}>
                      Send to Seller
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="homefooterbottom"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Order;
