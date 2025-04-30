import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaHeart, FaShoppingBag, FaSignOutAlt } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [wishlistItemsCount, setWishlistItemsCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const updateLoginState = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      setCartItemsCount(cart.length);
      setWishlistItemsCount(wishlist.length);

      if (currentUser) {
        setIsLoggedIn(true);
        setUserName(currentUser.name || currentUser.email.split('@')[0]);
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    };

    updateLoginState();
    window.addEventListener('loginStatusChanged', updateLoginState); // ✅ Listen for login updates

    return () => {
      window.removeEventListener('loginStatusChanged', updateLoginState);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.dispatchEvent(new Event('loginStatusChanged')); // ✅ Notify logout
    navigate('/login');
  };

  const toggleShopDropdown = () => {
    setShopDropdownOpen(!shopDropdownOpen);
    setUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
    setShopDropdownOpen(false);
  };

  const closeAllDropdowns = () => {
    setShopDropdownOpen(false);
    setUserDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      closeAllDropdowns();
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top shadow-sm" style={{backgroundColor:'#E6E6FA'}}>
      <div className="container">
        <Link className="navbar-brand fw-bold fs-3" to="/" style={{ color: '#8A2BE2' }}>
          Glamora
        </Link>

        <button 
          className="navbar-toggler" 
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
          <form className="d-lg-flex mx-4 flex-grow-1" onSubmit={handleSearch}>
            <div className="input-group">
              <input
                type="text"
                className="form-control border-end-0"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-secondary border-start-0" type="submit">
                <FaSearch />
              </button>
            </div>
          </form>

          <ul className="navbar-nav me-auto">
            <li className={`nav-item dropdown ${shopDropdownOpen ? 'show' : ''}`}>
              <button
                className="nav-link dropdown-toggle d-flex align-items-center bg-transparent border-0"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleShopDropdown();
                }}
              >
                Shop 
              </button>
              <ul className={`dropdown-menu ${shopDropdownOpen ? 'show' : ''}`}>
                <li><Link className="dropdown-item" to="/products?category=makeup" onClick={closeAllDropdowns}>Makeup</Link></li>
                <li><Link className="dropdown-item" to="/products?category=skincare" onClick={closeAllDropdowns}>Skincare</Link></li>
                <li><Link className="dropdown-item" to="/products?category=fragrance" onClick={closeAllDropdowns}>Fragrance</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/products" onClick={closeAllDropdowns}>All Products</Link></li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center">
            <Link to="/search" className="btn btn-link text-dark d-lg-none me-2" onClick={closeAllDropdowns}>
              <FaSearch size={18} />
            </Link>

            <div className={`dropdown ${userDropdownOpen ? 'show' : ''}`}>
              <button
                className="btn btn-link text-dark dropdown-toggle d-flex align-items-center"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleUserDropdown();
                }}
              >
                <FaUser size={18} className="me-1" />
                {isLoggedIn && <span className="d-none d-lg-inline">{userName}</span>}
              </button>
              <ul className={`dropdown-menu dropdown-menu-end ${userDropdownOpen ? 'show' : ''}`}>
                {isLoggedIn ? (
                  <>
                    <li><span className="dropdown-item-text fw-bold">Hi, {userName}</span></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/order" onClick={closeAllDropdowns}>My Orders</Link></li>
                    <li><Link className="dropdown-item" to="/wishlist" onClick={closeAllDropdowns}>My Wishlist</Link></li>
                    <li><Link className="dropdown-item" to="/account" onClick={closeAllDropdowns}>Account Settings</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li>
                      <button className="dropdown-item" onClick={() => {
                        handleLogout();
                        closeAllDropdowns();
                      }}>
                        <FaSignOutAlt className="me-2" />
                        Logout
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/login" onClick={closeAllDropdowns}>Login</Link></li>
                    <li><Link className="dropdown-item" to="/signup" onClick={closeAllDropdowns}>Create Account</Link></li>
                  </>
                )}
              </ul>
            </div>

            <Link to="/wishlist" className="btn btn-link text-dark position-relative me-2" onClick={closeAllDropdowns}>
              <FaHeart size={18} />
            </Link>

            <Link to="/cart" className="btn btn-link text-dark position-relative" onClick={closeAllDropdowns}>
              <FaShoppingBag size={18} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
