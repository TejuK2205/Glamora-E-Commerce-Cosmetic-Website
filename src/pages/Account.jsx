import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaCartPlus, FaEnvelope, FaMapMarkerAlt, FaEdit, FaHeart, FaSignOutAlt } from 'react-icons/fa';

export default function Account() {
  const [userData, setUserData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (!currentUser) {
      navigate('/login');
      return;
    }

    setUserData(currentUser);
    setFormData(currentUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem('currentUser', JSON.stringify(formData));
    setUserData(formData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setFormData(userData);
    setEditMode(false);
  };

  if (!userData) {
    return (
      <div className="account-page">
        <div className="container py-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="account-page">
      <div className="container py-5">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-3 mb-4">
            <div className="card border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="bg-primary bg-opacity-10 rounded-circle p-4 d-inline-flex mb-3">
                  <FaUser size={32} className="text-primary" />
                </div>
                <h5 className="fw-bold mb-1">{userData.name}</h5>
                <p className="text-muted mb-4">{userData.email}</p>
                
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <Link className="nav-link active d-flex align-items-center" to="/account">
                      <FaUser className="me-2" />
                      Account Details
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center" to="/wishlist">
                      <FaHeart className="me-2" />
                      Wishlist
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link d-flex align-items-center" to="/order">
                      <FaCartPlus className="me-2" />
                      Orders
                    </Link>
                  </li>
                  <li className="nav-item">
                    <button 
                      className="nav-link d-flex align-items-center w-100 text-start bg-transparent border-0"
                      onClick={handleLogout}
                    >
                      <FaSignOutAlt className="me-2" />
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-9">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="fw-bold mb-0">Account Details</h2>
                  {!editMode && (
                    <button 
                      onClick={() => setEditMode(true)} 
                      className="btn btn-outline-primary"
                      style={{ color: '#8A2BE2', borderColor: '#8A2BE2' }}
                    >
                      <FaEdit className="me-2" />
                      Edit Profile
                    </button>
                  )}
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                        <FaUser className="text-primary" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Name</h6>
                        {editMode ? (
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                        ) : (
                          <p className="mb-0">{userData.name}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                        <FaEnvelope className="text-primary" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Email</h6>
                        {editMode ? (
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        ) : (
                          <p className="mb-0">{userData.email}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="d-flex align-items-start mb-4">
                      <div className="bg-primary bg-opacity-10 p-3 rounded-circle me-3">
                        <FaMapMarkerAlt className="text-primary" />
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1">Address</h6>
                        {editMode ? (
                          <>
                            <input
                              type="text"
                              className="form-control mb-2"
                              name="address"
                              placeholder="Address"
                              value={formData.address || ''}
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control mb-2"
                              name="city"
                              placeholder="City"
                              value={formData.city || ''}
                              onChange={handleChange}
                            />
                            <input
                              type="text"
                              className="form-control"
                              name="zipCode"
                              placeholder="Zip Code"
                              value={formData.zipCode || ''}
                              onChange={handleChange}
                            />
                          </>
                        ) : (
                          <p className="mb-0">
                            {userData.address}
                            {userData.city && `, ${userData.city}`}
                            {userData.zipCode && `, ${userData.zipCode}`}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {editMode && (
                  <div className="mt-4 d-flex gap-2">
                    <button className="btn btn-success" onClick={handleSave}>
                      Save Changes
                    </button>
                    <button className="btn btn-secondary" onClick={handleCancel}>
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
