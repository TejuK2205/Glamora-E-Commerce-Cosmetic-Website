import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from 'react-icons/fa';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    setTimeout(() => {
      try {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(
          u => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          window.dispatchEvent(new Event('loginStatusChanged')); // ✅ notify navbar
          navigate('/');
        } else {
          setError('Invalid email or password');
        }
      } catch (err) {
        setError('An error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h2 className="text-center mb-4" style={{ color: '#8A2BE2' }}>Welcome Back</h2>
          
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaLock />
                </span>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="d-grid mb-3">
              <button 
                type="submit" 
                className="btn btn-primary py-2"
                disabled={loading}
                style={{ backgroundColor: '#8A2BE2', borderColor: '#8A2BE2' }}
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>

            <div className="text-center mb-3">
              <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#8A2BE2' }}>
                Forgot password?
              </Link>
            </div>

            <div className="text-center">
              <p className="mb-0">Don't have an account?{' '}
                <Link to="/signup" className="text-decoration-none fw-bold" style={{ color: '#8A2BE2' }}>
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
