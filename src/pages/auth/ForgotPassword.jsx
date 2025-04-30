import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API call delay
    setTimeout(() => {
      try {
        // Check if email exists in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.email === email);

        if (!userExists) {
          setError('No account found with this email');
          setLoading(false);
          return;
        }

        // In a real app, you would send a reset link here
        setSuccess(true);
      } catch (err) {
        setError('Password reset failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  if (success) {
    return (
      <div className="container py-5" style={{ maxWidth: '500px' }}>
        <div className="card shadow-sm border-0">
          <div className="card-body p-4 text-center">
            <FaCheckCircle className="text-success mb-3" size={48} />
            <h2 className="mb-3" style={{ color: '#8A2BE2' }}>Reset Email Sent</h2>
            <p className="mb-4">
              We've sent instructions to reset your password to <strong>{email}</strong>.
              Please check your inbox.
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="btn btn-primary w-100 py-2"
              style={{ backgroundColor: '#8A2BE2', borderColor: '#8A2BE2' }}
            >
              Return to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: '500px' }}>
      <div className="card shadow-sm border-0">
        <div className="card-body p-4">
          <h2 className="text-center mb-4" style={{ color: '#8A2BE2' }}>Forgot Password</h2>
          
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          <p className="text-center mb-4">
            Enter your email address and we'll send you a link to reset your password.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email Address</label>
              <div className="input-group">
                <span className="input-group-text">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                {loading ? 'Sending...' : 'Reset Password'}
              </button>
            </div>

            <div className="text-center">
              <Link 
                to="/login" 
                className="text-decoration-none"
                style={{ color: '#8A2BE2' }}
              >
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}