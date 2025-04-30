import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaArrowLeft, FaShoppingBag } from 'react-icons/fa';

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
    calculateSubtotal(savedCart);
    setLoading(false);
  }, []);

  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateSubtotal(updatedCart);
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex align-items-center mb-4">
              <button 
                onClick={() => navigate(-1)} 
                className="btn btn-link text-dark me-3"
              >
                <FaArrowLeft size={18} />
              </button>
              <h2 className="mb-0 fw-bold">Your Shopping Bag</h2>
              <span className="badge bg-primary ms-3" style={{ backgroundColor: '#8A2BE2' }}>
                {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
              </span>
            </div>

            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="text-center py-5">
                <FaShoppingBag size={48} className="text-muted mb-3" />
                <h4 className="mb-3">Your bag is empty</h4>
                <p className="text-muted mb-4">Start shopping to add items to your bag</p>
                <Link 
                  to="/products" 
                  className="btn btn-primary px-4 py-2"
                  style={{ backgroundColor: '#8A2BE2', border: 'none' }}
                >
                  Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  {cartItems.map(item => (
                    <div key={item.id} className="p-4 border-bottom">
                      <div className="row align-items-center">
                        <div className="col-md-2">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="img-fluid rounded"
                            style={{ height: '100px', width: '100px', objectFit: 'cover' }}
                          />
                        </div>
                        <div className="col-md-4">
                          <h5 className="mb-1">{item.name}</h5>
                          <p className="text-muted mb-1">{item.category}</p>
                          <p className="text-primary fw-bold">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="col-md-3">
                          <div className="d-flex align-items-center">
                            <button 
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              -
                            </button>
                            <span className="mx-3">{item.quantity}</span>
                            <button 
                              className="btn btn-outline-secondary btn-sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="col-md-2 text-end">
                          <p className="fw-bold mb-0">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                        <div className="col-md-1 text-end">
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="btn btn-link text-danger"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="col-lg-4 mt-4 mt-lg-0">
              <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">Order Summary</h5>
                  
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Tax</span>
                    <span>${(subtotal * 0.1).toFixed(2)}</span>
                  </div>
                  
                  <hr className="my-3" />
                  
                  <div className="d-flex justify-content-between fw-bold mb-4">
                    <span>Total</span>
                    <span>${(subtotal * 1.1).toFixed(2)}</span>
                  </div>
                  
                  <button 
                    onClick={handleCheckout}
                    className="btn btn-primary w-100 py-2"
                    style={{ backgroundColor: '#8A2BE2', border: 'none' }}
                  >
                    Proceed to Checkout
                  </button>
                  
                  <div className="text-center mt-3">
                    <Link 
                      to="/products" 
                      className="text-decoration-none"
                      style={{ color: '#8A2BE2' }}
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}