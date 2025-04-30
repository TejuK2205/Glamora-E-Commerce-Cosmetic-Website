import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaMapMarkerAlt, FaCreditCard, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
    calculateSubtotal(savedCart);
  }, []);

  const calculateSubtotal = (items) => {
    const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.zipCode.trim()) newErrors.zipCode = 'ZIP code is required';
    
    if (formData.paymentMethod === 'credit-card') {
      if (!formData.cardNumber.trim()) newErrors.cardNumber = 'Card number is required';
      if (!formData.cardExpiry.trim()) newErrors.cardExpiry = 'Expiry date is required';
      if (!formData.cardCvc.trim()) newErrors.cardCvc = 'CVC is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      const newOrder = {
        id: Date.now(),
        status: 'Confirmed',
        date: new Date().toLocaleDateString(),
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
        email: formData.email,
        phone: formData.phone,
        paymentMethod: formData.paymentMethod,
        items: cartItems,
        total: (subtotal * 1.1).toFixed(2)
      };
  
      const existingOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
      const updatedOrders = [...existingOrders, newOrder];
      localStorage.setItem('userOrders', JSON.stringify(updatedOrders));
  
      setTimeout(() => {
        localStorage.removeItem('cart');
        setOrderSuccess(true);
      }, 1500);
    }
  };
  
  if (orderSuccess) {
    return (
      <div className="checkout-page">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <FaCheckCircle className="text-success mb-4" size={64} />
              <h2 className="fw-bold mb-3">Order Confirmed!</h2>
              <p className="lead mb-4">
                Thank you for your purchase. Your order has been placed successfully.
              </p>
              <p className="mb-4">
                A confirmation email has been sent to <strong>{formData.email}</strong>.
              </p>
              <div className="d-flex justify-content-center gap-3">
                <Link to="/products" className="btn btn-outline-primary px-4">Continue Shopping</Link>
                <Link to="/order" className="btn btn-primary px-4" style={{ backgroundColor: '#8A2BE2', border: 'none' }}>
                  View Order
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex align-items-center mb-4">
              <button onClick={() => navigate(-1)} className="btn btn-link text-dark me-3">
                <FaArrowLeft size={18} />
              </button>
              <h2 className="mb-0 fw-bold">Checkout</h2>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">
                    <FaMapMarkerAlt className="me-2" />
                    Shipping Information
                  </h5>

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="firstName" className="form-label">First Name*</label>
                      <input
                        type="text"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lastName" className="form-label">Last Name*</label>
                      <input
                        type="text"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="email" className="form-label">Email*</label>
                      <input
                        type="email"
                        className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="phone" className="form-label">Phone*</label>
                      <input
                        type="tel"
                        className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                    </div>
                    <div className="col-12">
                      <label htmlFor="address" className="form-label">Address*</label>
                      <input
                        type="text"
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="city" className="form-label">City*</label>
                      <input
                        type="text"
                        className={`form-control ${errors.city ? 'is-invalid' : ''}`}
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                      />
                      {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="zipCode" className="form-label">ZIP Code*</label>
                      <input
                        type="text"
                        className={`form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                      />
                      {errors.zipCode && <div className="invalid-feedback">{errors.zipCode}</div>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h5 className="fw-bold mb-4">
                    <FaCreditCard className="me-2" />
                    Payment Method
                  </h5>

                  <div className="mb-4">
                    <div className="form-check mb-2">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="paymentMethod"
                        id="credit-card"
                        value="credit-card"
                        checked={formData.paymentMethod === 'credit-card'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label fw-bold" htmlFor="credit-card">
                        Credit Card
                      </label>
                    </div>

                    {formData.paymentMethod === 'credit-card' && (
                      <div className="ps-4 mt-3">
                        <div className="mb-3">
                          <label htmlFor="cardNumber" className="form-label">Card Number*</label>
                          <input
                            type="text"
                            className={`form-control ${errors.cardNumber ? 'is-invalid' : ''}`}
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="1234 5678 9012 3456"
                          />
                          {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                        </div>
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label htmlFor="cardExpiry" className="form-label">Expiry Date*</label>
                            <input
                              type="text"
                              className={`form-control ${errors.cardExpiry ? 'is-invalid' : ''}`}
                              id="cardExpiry"
                              name="cardExpiry"
                              value={formData.cardExpiry}
                              onChange={handleChange}
                              placeholder="MM/YY"
                            />
                            {errors.cardExpiry && <div className="invalid-feedback">{errors.cardExpiry}</div>}
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="cardCvc" className="form-label">CVC*</label>
                            <input
                              type="text"
                              className={`form-control ${errors.cardCvc ? 'is-invalid' : ''}`}
                              id="cardCvc"
                              name="cardCvc"
                              value={formData.cardCvc}
                              onChange={handleChange}
                              placeholder="123"
                            />
                            {errors.cardCvc && <div className="invalid-feedback">{errors.cardCvc}</div>}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="paymentMethod"
                      id="paypal"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleChange}
                    />
                    <label className="form-check-label fw-bold" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100 py-3 fw-bold"
                style={{ backgroundColor: '#8A2BE2', border: 'none' }}
              >
                <FaLock className="me-2" />
                Complete Order
              </button>
            </form>
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow-sm sticky-top" style={{ top: '20px' }}>
              <div className="card-body p-4">
                <h5 className="fw-bold mb-4">Order Summary</h5>

                <div className="mb-3">
                  {cartItems.map(item => (
                    <div key={item.id} className="d-flex justify-content-between mb-2">
                      <div>
                        <span className="fw-bold">{item.quantity} × </span>
                        {item.name}
                      </div>
                      <div>${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                  ))}
                </div>

                <hr />

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

                <hr />

                <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                  <span>Total</span>
                  <span>${(subtotal * 1.1).toFixed(2)}</span>
                </div>

                <div className="text-center">
                  <Link to="/cart" className="text-decoration-none" style={{ color: '#8A2BE2' }}>
                    Edit Cart
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
