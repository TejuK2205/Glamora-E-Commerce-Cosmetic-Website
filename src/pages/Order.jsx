import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaCreditCard, FaArrowLeft } from 'react-icons/fa';

export default function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Retrieve orders from localStorage
    const userOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
    setOrders(userOrders);
  }, []);

  return (
    <div className="orders-page">
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="d-flex align-items-center mb-4">
              <Link to="/" className="btn btn-link text-dark me-3">
                <FaArrowLeft size={18} />
              </Link>
              <h2 className="mb-0 fw-bold">My Orders</h2>
            </div>

            {orders.length === 0 ? (
              <div className="text-center">
                <p>You have no orders yet. Start shopping now!</p>
                <Link to="/products" className="btn btn-primary">
                  Browse Products
                </Link>
              </div>
            ) : (
              <div>
                {orders.map((order) => (
                  <div key={order.id} className="card mb-4">
                    <div className="card-body">
                      <h5 className="fw-bold mb-3">Order #{order.id}</h5>
                      <p><strong>Status:</strong> {order.status}</p>
                      <p><strong>Date:</strong> {order.date}</p>

                      <h6 className="mt-4">Shipping Information</h6>
                      <p><FaMapMarkerAlt className="me-2" />{order.address}, {order.city}, {order.zipCode}</p>
                      <p><strong>Email:</strong> {order.email} | <strong>Phone:</strong> {order.phone}</p>

                      <h6 className="mt-4">Payment Method</h6>
                      <p><FaCreditCard className="me-2" />{order.paymentMethod}</p>

                      <h6 className="mt-4">Order Summary</h6>
                      <ul>
                        {order.items.map((item, index) => (
                          <li key={index}>
                            {item.quantity} × {item.name} - ${(item.price * item.quantity).toFixed(2)}
                          </li>
                        ))}
                      </ul>

                      <div className="d-flex justify-content-between">
                        <span className="fw-bold">Total</span>
                        <span>${order.total}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
