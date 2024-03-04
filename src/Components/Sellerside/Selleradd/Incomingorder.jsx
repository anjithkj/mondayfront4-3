import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import baseUrl from '../../../Api';

const Incomingorder = () => {
  const { productId } = useParams(); // Extract productId from URL parameters
  const [orders, setOrders] = useState([]); // Define orders state
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [productId]); // Fetch product whenever productId changes

  const fetchProduct = async () => {
    try {
      const response = await axios.get(baseUrl + `/products/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []); // Fetch orders once on component mount

  const fetchOrders = async () => {
    try {
      const response = await axios.get(baseUrl + '/sellerview/sellervieworder');
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  return (
    <div className="midall">
      <br />
      <h2 className="hd">Orders</h2>
      {orders.length === 0 ? (
        <p className='nocart'>No items in the orders...!</p>
      ) : (
        <div className="cart-box">
          <table>
            <thead>
              <tr>
                <th>Product Id</th>
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
                  <td>{item.productId}</td>
                  <td>{item.productName}</td>
                  <td>{item.productPrice}</td>
                  <td>{item.productQuantity}</td>
                  <td>{item.productDescription}</td>
                  <td>{item.status}</td>
                  {/* Add action button here if needed */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="homefooterbottom"></div>
    </div>
  );
};

export default Incomingorder;
